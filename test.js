/* jshint mocha: true */
'use strict';

var assert = require('assert');
var randPath = require('.');

describe('randPath()', function describe() {
  it('returns random path 1 directory deep', function it() {
    assert(/^[\w]{2}$/.test(randPath(1)));
  });

  it('returns random path n directoreis deep', function it() {
    assert(/^([\w]{2}\/){1}[\w]{2}$/.test(randPath(2)), '2 dirs deep');
    assert(/^([\w]{2}\/){2}[\w]{2}$/.test(randPath(3)), '3 dirs deep');
    assert(/^([\w]{2}\/){3}[\w]{2}$/.test(randPath(4)), '4 dirs deep');
    assert(/^([\w]{2}\/){7}[\w]{2}$/.test(randPath(8)), '8 dirs deep');
  });

  it('returns random path 3 directoreis deep by default', function it() {
    assert(/^([\w]{2}\/){2}[\w]{2}$/.test(randPath()), '3 dirs deep');
  });
});
