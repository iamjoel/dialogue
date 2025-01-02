const fs = require('fs');
const path = require('path');

const moveFoldName = 'domain'
// Define folder paths
const movePath = path.join(__dirname, `../${moveFoldName}`);
const infoPath = path.join(__dirname, '.');

// Recursively process folders
function processFolder(folderPath) {
  // Read all files and subfolders in the folder
  fs.readdir(folderPath, (err, items) => {
    if (err) {
      console.error(`Unable to read folder ${folderPath}:`, err);
      return;
    }

    items.forEach(item => {
      const itemPath = path.join(folderPath, item);
      const isFile = fs.statSync(itemPath).isFile();

      if (isFile) {
        handleFile(itemPath);
      } else {
        // If it's a subfolder, process it recursively
        processFolder(itemPath);
      }
    });
  });
}

// Handle file processing
function handleFile(filePath) {
  const fileName = path.basename(filePath);
  let newFileName = fileName;

  // If the file is readme.md or index.md, rename it to the folder's name
  if (fileName.toLowerCase() === 'readme.md' || fileName.toLowerCase() === 'index.md') {
    const folderName = path.basename(path.dirname(filePath));
    newFileName = `${folderName}.md`;
  }

  // Get the first letter of the filename
  const firstLetter = newFileName.charAt(0).toLowerCase();

  // Check if the first letter is a-z
  if (/[a-z]/.test(firstLetter)) {
    const targetFolder = path.join(infoPath, firstLetter);

    // Ensure the target folder exists
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }

    // Generate a unique filename
    const uniqueFileName = getUniqueFileName(targetFolder, newFileName);
    const isFileNameChanged = uniqueFileName !== newFileName;

    // Move the file
    const newFilePath = path.join(targetFolder, uniqueFileName);
    fs.rename(filePath, newFilePath, err => {
      if (err) {
        console.error(`Unable to move file ${fileName}:`, err);
      } else {
        console.log(`File ${fileName} moved to ${targetFolder}${isFileNameChanged ? `, renamed to ${uniqueFileName}` : ''}`);
      }
    });
  } else {
    console.log(`File ${fileName} does not start with a-z, skipping`);
  }
}

// Generate a unique filename
function getUniqueFileName(folderPath, fileName) {
  let uniqueName = fileName;
  let counter = 1;

  // Extract the name and extension of the file
  const { name, ext } = parseFileName(fileName);

  // Check if the filename already exists
  while (fs.existsSync(path.join(folderPath, uniqueName))) {
    uniqueName = `${name}-${counter}${ext}`;
    counter++;
  }

  return uniqueName;
}

// Parse the filename into name and extension
function parseFileName(fileName) {
  const ext = path.extname(fileName); // Get the extension
  const name = path.basename(fileName, ext); // Get the name without extension
  return { name, ext };
}

// Start processing the domain folder
processFolder(movePath);