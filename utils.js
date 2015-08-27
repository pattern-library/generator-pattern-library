'use strict';

var path = require('path');


function getPatternPath (props) {
  if (typeof props !== 'object') {
    throw new Error('props should be an object from Yeoman');
  }
  if (!props.category) {
    throw new Error('props should have a category');
  }
  if (!props.subcategoryKebab) {
    throw new Error('props should have a kebab version of subcategory');
  }
  if (!props.patternNameKebab) {
    throw new Error('props should have a kebab version of the pattern name');
  }

  return path.join(props.category,props.subcategoryKebab,props.patternNameKebab);
}

module.exports = {
  getPatternPath: getPatternPath
}
