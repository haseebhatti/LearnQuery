function cssProp (element, property, value) {
  'use strict';
  for (var prop in property) {
    element.style[prop] = property[prop];
  }
  element.style[property] = value;
  console.log(element);
  return 'none';
}
