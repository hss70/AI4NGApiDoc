const fs = require('fs');
const path = require('path');

// Output directly into _site/apis
const outputDir = path.join(__dirname, '../../_site/apis');
const output = path.join(outputDir, 'apis.json');

// Ensure output directory exists
fs.mkdirSync(outputDir, { recursive: true });

// Scan original YAML directory
const apiDir = path.join(__dirname, '../../apis');
console.log('API Directory:', apiDir);

fs.readdir(apiDir, (err, files) => {
  if (err) {
    console.error('Failed to read API directory', err);
    process.exit(1);
  }

  const yamlFiles = files.filter(f => f.endsWith('.yaml') || f.endsWith('.yml'));

  fs.writeFileSync(output, JSON.stringify(yamlFiles, null, 2));
  console.log(`✅ apis.json written to ${output}`);
});