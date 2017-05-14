/* eslint-env node */
const Filter = require('broccoli-filter');

CommenterFilter = function(inputNode) {
  Filter.call(this, inputNode);
};

const prependComments = function(existingString) {
  var prepend = `/**
* vendor.js
*
* (c) 2017 🦄🦄🦄🔫🌈🍺🍺 All Rights Reserved
* generated at: ${new Date().toISOString()}
*/
`;
  return prepend + existingString;
};

CommenterFilter.prototype = Object.create(Filter.prototype);
CommenterFilter.prototype.extensions = ['js'];
CommenterFilter.prototype.targetExtension = 'js';
CommenterFilter.prototype.processString = prependComments;

module.exports = CommenterFilter;
