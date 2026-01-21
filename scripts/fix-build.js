/* eslint-disable */
const fs = require('fs');
const path = require('path');

// This script ensures that local-data.ts exists before the build starts.
// It is triggered by the 'postinstall' hook in package.json.

const targetFile = 'local-data.ts';
const templateFile = 'local-data.example.ts';
const dataDir = path.join(process.cwd(), 'src', 'lib', 'data');

const targetPath = path.join(dataDir, targetFile);
const sourcePath = path.join(dataDir, templateFile);

console.log('--- DICPC Build Fail-Safe ---');
console.log(`Checking for ${targetFile} in ${dataDir}...`);

if (!fs.existsSync(targetPath)) {
  console.log(`⚠️ ${targetFile} not found. Generating from template...`);
  if (fs.existsSync(sourcePath)) {
    try {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ Successfully created ${targetFile}`);
    } catch (err) {
      console.error(`❌ Error creating ${targetFile}:`, err.message);
      // Don't exit with error here to allow build to try anyway, 
      // though it will likely fail.
    }
  } else {
    console.error(`❌ Template ${templateFile} not found!`);
  }
} else {
  console.log(`✅ ${targetFile} exists. Skipping generation.`);
}
console.log('-----------------------------');
