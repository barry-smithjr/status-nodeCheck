console.log('Starting HTTP status checker')

// Required modules
var http = require('http');
const fs = require('fs');
const yaml = require('js-yaml');

// Attempt to load config
try {
  const config = yaml.safeLoad(fs.readFileSync('sites.yml', 'utf8'));
} catch (e) {
  console.log(e);
  console.log('Failed to load config, exiting');
  process.exit(1);
} finally {

}
