'use strict';

const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

module.exports = function randPath(d, l) {
  const depth = d || 3;
  const length = l || 2;

  const res = [];

  for (let i = 0; i < depth; i++) {
    const dir = [];

    for (let j = 0; j < length; j++) {
      dir.push(a[Math.floor(Math.random() * module.exports.a.length)]);
    }

    res.push(dir.join(''));
  }

  return res.join('/');
};

module.exports.a = a;
