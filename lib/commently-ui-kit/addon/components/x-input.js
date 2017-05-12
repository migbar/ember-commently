import Ember from 'ember';
import TextField from 'commently-ui-kit/mixins/text-field';
import layout from 'commently-ui-kit/templates/components/x-input';

const { Component } = Ember;

export default Component.extend(TextField, {
  layout,
  classNames: ['x-input'],
  type: 'text'
});
