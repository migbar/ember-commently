import Ember from 'ember';

let defaultWidth = <%= defaultWidth %>;
let defaultHeight = <%= defaultHeight %>;

export function <%= camelizedModuleName %>(params, hash) {
  let { h, w } = hash;
  let height = h || defaultHeight;
  let width = w || defaultWidth;

  return `<%= baseURL %>/${height}/${width}`;
}

export default Ember.Helper.helper(<%= camelizedModuleName %>);
