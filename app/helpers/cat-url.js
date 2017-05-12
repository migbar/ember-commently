import Ember from 'ember';
const { Helper: { helper } } = Ember;

let defaultWidth = 310;
let defaultHeight = 300;

export function catUrl(params, hash) {
  let { h, w } = hash;
  let height = h || defaultHeight;
  let width = w || defaultWidth;

  return `http://placekitten.com/${height}/${width}`;
}

export default helper(catUrl);
