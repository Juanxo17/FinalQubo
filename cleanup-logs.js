const fs = require('fs');
const path = require('path');

// Function to remove emoji characters from a string
function removeEmojis(text) {
  // This regex aims to match emoji characters and some other special characters
  return text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
}

// Function to remove emojis from console.log statements
function removeEmojisFromLogs(content) {
  // Regular expression to match console.log statements with emojis
  const logPattern = /(console\.log\(["'])([^"']*?)([🔥✅🎉🚀❌⚠️🔄🎯🌟💡🛑📝🔐🆔🧡💔❤️📷].*?)(['"])/g;
  
  // Replace emojis in console.log statements
  return content.replace(logPattern, (match, prefix, beforeEmoji, withEmoji, suffix) => {
    return `${prefix}${beforeEmoji}${removeEmojis(withEmoji)}${suffix}`;
  });
}

// Function to process a file
function processFile(filePath) {
  console.log(`Processing file: ${filePath}`);
  
  // Read the file
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Remove emojis from console.log statements
  const updatedContent = removeEmojisFromLogs(content);
  
  // Write the file if changes were made
  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated file: ${filePath}`);
  } else {
    console.log(`No changes needed in: ${filePath}`);
  }
}

// Function to process all JavaScript files in a directory recursively
function processDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      // Skip node_modules and other non-source directories
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        processDirectory(filePath);
      }
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      processFile(filePath);
    }
  }
}

// Process the Backend directory
const backendDir = path.join(__dirname, 'Backend');
processDirectory(backendDir);

console.log('Done processing files!');
