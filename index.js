'use strict';

module.exports = function randPath(depth) {
  depth = depth || 3;
  var res = [];
  var i;
  var x;
  var y;

  for (i = 0; i < depth; i++) {
    x = module.exports.a[Math.floor(Math.random() * module.exports.a.length)];
    y = module.exports.a[Math.floor(Math.random() * module.exports.a.length)];
    res.push(x + y);
  }

  return res.join('/');
};

module.exports.a = [
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'abcdefghijklmnopqrstuvwxyz',
  '0123456789'
].join('');
