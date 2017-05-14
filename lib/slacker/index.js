/* eslint-env node */
'use strict';

module.exports = {
  name: 'slacker',

  includedCommands: function() {
    return {
      'slacker': {
        name: 'slacker',
        description: 'Easily post a message to slack',
        works: 'insideProject',
        anonymousOptions: [
          '<message>'
        ],
        availableOptions: [{
          name: 'channel',
          type: String,
          default: 'general'
        }],

        run: function(commandOptions, rawArgs) {
          this.ui.writeLine('---------------------------------');
          this.ui.writeLine('the channel is #' + commandOptions.channel);
          this.ui.writeLine('the message ' + rawArgs[0]);
          this.ui.writeLine('--------------------------------');
        }

      }
    }
  },

  isDevelopingAddon: function() {
    return true;
  }
};
