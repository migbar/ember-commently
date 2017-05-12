import Ember from 'ember';
import TextField from 'commently-ui-kit/mixins/text-field';
import layout from 'commently-ui-kit/templates/components/x-textarea';

const { Component } = Ember;

export default Component.extend(TextField, {
  layout,
  classNames: ['x-textarea']
});
