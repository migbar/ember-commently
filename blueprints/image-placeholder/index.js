'use strict';
/* eslint-env node */
var normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  description: 'Generates a helper function.',
  availableOptions: [           // Optional, default is an empty array
    {
      name: 'base',     // Required
      key: 'baseURL',        // Optional, default is the camelized name
      description: 'The URL for the image placeholder service.',       // Optional
      type: String,             // Required
      default: 'http://placehold.it',     // Optional, default is undefined
      required: true          // Optional, default is false
    },
    {
      name: 'width',     // Required
      key: 'defaultWidth',        // Optional, default is the camelized name
      description: 'The default width for the image.',       // Optional
      type: String,             // Required
      default: '310',     // Optional, default is undefined
      required: false          // Optional, default is false
    },
    {
      name: 'height',     // Required
      key: 'defaultHeight',        // Optional, default is the camelized name
      description: 'The default height for the image.',       // Optional
      type: String,             // Required
      default: '300',     // Optional, default is undefined
      required: false          // Optional, default is false
    }
  ],
  normalizeEntityName: function(entityName) {
    return normalizeEntityName(entityName);
  },

  locals: function(options) {
    return {
      baseURL: options.base,
      defaultWidth: options.width,
      defaultHeight: options.height
    };
  }
};
