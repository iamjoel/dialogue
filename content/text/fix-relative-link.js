const fs = require('fs');
const path = require('path');

// Function to update relative paths in markdown files
function updateMarkdownLinks(dir) {
  // Read all directories in the current folder
  const directories = fs.readdirSync(dir).filter(file => fs.statSync(path.join(dir, file)).isDirectory());
  // Iterate through each directory
  directories.forEach(letterDir => {
    const letterDirPath = path.join(dir, letterDir);

    // Read all markdown files in the directory
    const markdownFiles = fs.readdirSync(letterDirPath).filter(file => file.endsWith('.md'));

    // Iterate through each markdown file
    markdownFiles.forEach(markdownFile => {
      const filePath = path.join(letterDirPath, markdownFile);
      let content = fs.readFileSync(filePath, 'utf8');

      // Regular expression to match URLs in Markdown link syntax
      const markdownLinkRegex = /\[.*?\]\((\.\.?\/.*?\.md)\)/g;

      // Replace relative paths with the new format
      content = content.replace(markdownLinkRegex, (match, p1) => {
        const oldPath = p1;
        const newPath = transformPath(oldPath, markdownFile);
        return match.replace(oldPath, newPath);
      });

      // Write the updated content back to the file
      fs.writeFileSync(filePath, content, 'utf8');
    });
  });
}

// Function to transform the path according to the requirements
function transformPath(oldPath, currentFileName) {
  // Normalize the path to handle different formats (e.g., './', '../')
  const normalizedPath = path.normalize(oldPath);

  // Extract the file name and its first letter
  const fileName = path.basename(normalizedPath, '.md');
  const firstLetter = fileName.charAt(0).toLowerCase();

  // Check if the file name is 'readme' or 'index'
  if (fileName.toLowerCase() === 'readme' || fileName.toLowerCase() === 'index') {
    // Get the parent directory name and its first letter
    const parentDir = path.basename(path.dirname(normalizedPath));
    const parentFirstLetter = parentDir.charAt(0).toLowerCase();

    // Construct the new path
    return `../${parentFirstLetter}/${parentDir}.md`;
  } else {
    // Construct the new path
    return `../${firstLetter}/${fileName}.md`;
  }
}

// Main function to execute the script
function main() {
  const currentDir = path.join(__dirname, '.');
  updateMarkdownLinks(currentDir);
  console.log('Markdown links updated successfully.');
}

// Run the main function
main();