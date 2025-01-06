const fs = require('fs');
const path = require('path');

const infoFolder = path.join(__dirname, '.');
const outputFile = path.join(infoFolder, 'combined.txt'); // Path to the output combined file. Dify would handle markdown by ## and so on sematic.
const separator = '@@@@@@@@@@\n'; // Separator between file contents

// Recursively find all .md files in a directory
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findMarkdownFiles(filePath, fileList); // Recursively search in subdirectories
    } else if (path.extname(file) === '.md') {
      fileList.push(filePath); // Add .md files to the list
    }
  });

  return fileList;
}

// Combine the contents of all .md files into one file
function combineFiles(filePaths, outputPath) {
  const combinedContent = filePaths
    .map(filePath => {
      const content = fs.readFileSync(filePath, 'utf8'); // Read each file's content
      console.log(`Combined ${filePath}`);
      return content + '\n' + separator; // Append the separator
    })
    .join('');

  fs.writeFileSync(outputPath, combinedContent, 'utf8'); // Write the combined content to the output file
}

// Main function to execute the script
function main() {
  const markdownFiles = findMarkdownFiles(infoFolder); // Find all .md files
  if (markdownFiles.length > 0) {
    combineFiles(markdownFiles, outputFile); // Combine the files if any are found
  } else {
    console.log('No markdown files found.'); // Log if no .md files are found
  }
}

main(); // Run the script