const fs = require('fs');
const package = require('./../package.json');
const buildDate = new Date();
const dist = require('minimist')(process.argv).dist;
const license = require('minimist')(process.argv).license;

function addLicenseToFile (license, destination) {
  if (!license) {
    throw new Error('license path is required as 1st argument');
  }

  addLicenseTextToFile(fs.readFileSync(license).toString(), destination);
}

function addLicenseTextToFile(licenseText, destination) {
  if (!destination) {
    throw new Error('destination file path is required as 2nd argument');
  }

  fs.writeFileSync(destination, `/*!
  JSON Schema Core
  @name core
  @version ${package.version}
  @date ${buildDate.toUTCString()}
  @link https://github.com/json-schema-form/core
  
  @license
  ${licenseText}

  Copyright (c) 2016-${buildDate.getFullYear()} JSON Schema Form
 **/
${fs.readFileSync(`${destination}`).toString()}
`);
}

module.exports = {
  addLicenseToFile: addLicenseToFile,
  addLicenseTextToFile: addLicenseTextToFile
};