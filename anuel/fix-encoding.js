// This script will fix the encoding issue in ViewProfile.jsx
// It creates a new file with the correct encoding (UTF-8 without BOM)

import fs from 'fs';
import path from 'path';

const sourcePath = path.resolve('./src/pages/ViewProfile.jsx');
const tempPath = path.resolve('./src/pages/ViewProfile_fixed.jsx');

try {
  // Read the file content
  const content = fs.readFileSync(sourcePath, 'utf8');
  
  // Remove any BOM or invalid characters at the beginning
  // The BOM character in UTF-8 is the byte sequence EF BB BF
  // In JavaScript strings, it might appear as characters like �
  const cleanContent = content.replace(/^\uFEFF|^[\u{0000}-\u{0008}\u{000B}\u{000C}\u{000E}-\u{001F}]*/u, '');
  
  // Write the clean content to a new file
  fs.writeFileSync(tempPath, cleanContent, 'utf8');
  
  // Replace the original file with the fixed one
  fs.renameSync(tempPath, sourcePath);
  
  console.log('Fixed encoding in ViewProfile.jsx successfully!');
} catch (error) {
  console.error('Error fixing file:', error);
}
