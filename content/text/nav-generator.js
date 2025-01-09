const fs = require('fs');
const path = require('path');

const infoFolderPath = path.join(__dirname, '.');
const navCsvPath = path.join(__dirname, 'nav.csv');

/**
 * Get a list of folder paths (a to z)
 * @returns {string[]} List of folder paths
 */
function getFolderPaths() {
  const folderPaths = [];
  for (let i = 0; i < 26; i++) {
    const folderName = String.fromCharCode(97 + i); // 97 is the ASCII code for 'a'
    const folderPath = path.join(infoFolderPath, folderName);
    if (fs.existsSync(folderPath)) {
      folderPaths.push(folderPath);
    }
  }
  return folderPaths;
}

/**
 * Get all .md files in a folder
 * @param {string} folderPath Path to the folder
 * @returns {string[]} List of .md file paths
 */
function getMdFilesInFolder(folderPath) {
  return fs.readdirSync(folderPath)
    .filter(file => path.extname(file) === '.md')
    .map(file => path.join(folderPath, file));
}

/**
 * Extract metadata from .md file content
 * @param {string} fileContent Content of the .md file
 * @returns {{title: string, description: string}} Extracted metadata
 */
function extractMetadata(fileContent) {
  const titleMatch = fileContent.match(/title:\s*(.*)/);
  const title = titleMatch ? titleMatch[1].trim() : '';
  const descriptionMatch = fileContent.match(/description:\s*(.*)/);
  const description = descriptionMatch ? descriptionMatch[1].trim() : (title ? title : '');
  const tagsMatch = fileContent.match(/tags:\s*(.*)/); / tags: open-source, BaaS'/
  const tags = tagsMatch ? tagsMatch[1].trim() : '';

  return {
    title: title || 'N/A',
    description: description || 'N/A',
    tags: tags || '',
    contentLength: fileContent.length,
  };
}

/**
 * Escape special characters in a CSV field
 * @param {string} field Field value
 * @returns {string} Escaped field value
 */
function escapeCsvField(field) {
  if (typeof field === 'string' && (field.includes(',') || field.includes('\n') || field.includes('"'))) {
    return `"${field.replace(/"/g, '""')}"`; // Escape double quotes
  }
  return field;
}

/**
 * Convert a record to a CSV line
 * @param {{title: string, description: string, filePath: string ...}} record Record to convert
 * @returns {string} CSV line
 */
function convertRecordToCsvLine({ title, description, filePath, tags, contentLength }, index) {
  return [
    index + 1,
    escapeCsvField(title),
    escapeCsvField(description),
    escapeCsvField(filePath),
    escapeCsvField(tags),
    `"${contentLength.toLocaleString()}"`, // format it with thousand separator
  ].join(',');
}

/**
 * Generate CSV file content
 * @param {{title: string, description: string, filePath: string}[]} records List of records
 * @returns {string} CSV file content
 */
function generateCsvContent(records) {
  const csvHeader = 'No,Title,Description,FilePath,Tags,ContentLength\n';
  const csvLines = records.map(convertRecordToCsvLine).join('\n');
  return csvHeader + csvLines;
}

/**
 * Main function: Generate the nav.csv file
 */
function generateNavCsv() {
  const records = [];

  // Iterate through all folders
  const folderPaths = getFolderPaths();
  folderPaths.forEach(folderPath => {
    const mdFiles = getMdFilesInFolder(folderPath);
    mdFiles.forEach(filePath => {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const metaData = extractMetadata(fileContent);
      const filename = path.basename(filePath);
      const outputFilePath = `./${filename.charAt(0).toLowerCase()}/${filename}`

      // Add file information to the records array
      records.push({ ...metaData, filePath: outputFilePath });
    });
  });

  // Generate CSV content and write to file
  const csvContent = generateCsvContent(records);
  fs.writeFileSync(navCsvPath, csvContent, 'utf8');

  console.log('nav.csv file has been successfully generated!');
}

// Execute the main function
generateNavCsv();