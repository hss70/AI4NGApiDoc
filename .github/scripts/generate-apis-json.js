// This script generates a JSON file containing the list of YAML files in the Apis directory.
// It reads the directory, filters for files with .yaml or .yml extensions, and writes the list to apis.json.
const fs = require('fs');
const path = require('path');

const apiDir = path.join(__dirname, '../../Apis');
const output = path.join(__dirname, '../../Apis/apis.json');

fs.readdir(apiDir, (err, files) => {
  if (err) throw err;

  const yamlFiles = files.filter(f => f.endsWith('.yaml') || f.endsWith('.yml'));

  fs.writeFileSync(output, JSON.stringify(yamlFiles, null, 2));
  console.log(`✅ Generated apis.json with ${yamlFiles.length} entries.`);
});
