/* eslint-env node */
'use strict';

const CommenterFilter = require('./broccoli-plugins/commenter-filter');

module.exports = {
  name: 'commenter',

  postprocessTree: function(type, tree) {
    return new CommenterFilter(tree, {});
  },

  isDevelopingAddon: function() {
    return true;
  }
};
