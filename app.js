console.log('Starting HTTP status checker')

// Required modules
var http = require('http');
const fs = require('fs');
const yaml = require('js-yaml');
var request = require('request');
//const config = yaml.safeLoad(fs.readFileSync('sites.yml', 'utf8'));
var config = require('./sites.json');
//var url = function(build_url);

try {
  site = JSON.parse(config); 
} catch (e) {
  // You can read e for more info
  // Let's assume the error is that we already have parsed the payload
  // So just return that
  console.log(e);
  site = config;
}

// Attempt to load config
//try {
//  const config = yaml.safeLoad(fs.readFileSync('sites.yml', 'utf8'));
//} catch (e) {
//  console.log(e);
//  console.log('Failed to load config, exiting');
//  process.exit(1);
//} finally {
//  const config = yaml.load(fs.readFileSync("./sites.yml"));
//};

//request('http://bamboo.crsinc.com', function (error, response, body) {
  // Uncomment for troublshooting
  // console.log('error:', error);
  //console.log('head', head);
//  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//});

//function check_site();
//function build_url (){
//  url = config.site_url
//};

console.log('Printing the site url');
console.log(config.url);