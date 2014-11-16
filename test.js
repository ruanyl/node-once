'use strict';
var test = require('ava');
var once = require('./');

test(function (t) {
  var i = 0;
  function plus(n) {
    i = i + n;
    return i;
  }
  var fn = once(plus);
  var result = fn(2);
  result = fn(2);
  t.assert(result == 2);
});
