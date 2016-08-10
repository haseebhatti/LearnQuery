var getNode = function (selector) {
  var node;
  if (selector.type === '.') {
    node = document.getElementsByClassName(selector.value)[0];
  }else if (selector.type === '#') {
    node = document.getElementById(selector.value);
  }else {
    node = document.getElementsByTagName(selector.value)[0];
  }
  return [node];
};

var parseSelector = function (selectors) {
  var selector = {};
  var selector_array = selectors.split('');
  // This test is garbage needs refactored
  if ((/\?/).test(selectors)) {
    throw error;
  }
  selector.type = selector_array.shift();
  selector.value = selector_array.join('');
  if (selector.type !== '#' && selector.type !== '.') {
    selector.value = selectors;
  }
  return selector;
};

var domSelector = function (selectors) {
  'use strict';
  if (selectors) {
    var selector = parseSelector(selectors);
    return getNode(selector);
  }

  return [];
};
