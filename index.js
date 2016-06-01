'use strict';

module.exports = function randPath(d) {
  const depth = d || 3;
  const res = [];

  for (let i = 0; i < depth; i++) {
    const x = module.exports.a[Math.floor(Math.random() * module.exports.a.length)];
    const y = module.exports.a[Math.floor(Math.random() * module.exports.a.length)];
    res.push(x + y);
  }

  return res.join('/');
};

module.exports.a = [
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'abcdefghijklmnopqrstuvwxyz',
  '0123456789',
].join('');
