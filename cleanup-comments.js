const fs = require('fs');
const path = require('path');

// Function to remove comments from JavaScript and JSX files
function removeComments(content) {
  // Remove single line comments that start with // 
  // but avoid removing URLs with http:// or https://
  const withoutSingleLineComments = content.replace(/([^:])\/\/.*$/gm, '$1');
  
  // Remove multi-line comments (/* ... */)
  return withoutSingleLineComments.replace(/\/\*[\s\S]*?\*\//g, '');
}

// Function to process a file
function processFile(filePath) {
  console.log(`Processing file: ${filePath}`);
  
  // Read the file
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Remove comments
  const updatedContent = removeComments(content);
  
  // Write the file if changes were made
  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated file: ${filePath}`);
  } else {
    console.log(`No changes needed in: ${filePath}`);
  }
}

// Function to process all JavaScript and JSX files in a directory recursively
function processDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      // Skip node_modules and other non-source directories
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== 'generated') {
        processDirectory(filePath);
      }
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      processFile(filePath);
    }
  }
}

// Process both directories
const anuelDir = path.join(__dirname, 'anuel', 'src');
const backendDir = path.join(__dirname, 'Backend');

console.log('Processing frontend files:');
processDirectory(anuelDir);

console.log('Processing backend files:');
processDirectory(backendDir);

console.log('Done processing files!');
