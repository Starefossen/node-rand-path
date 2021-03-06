'use strict';

const assert = require('assert');
const randPath = require('.');

describe('randPath()', () => {
  it('returns random path 1 directory deep', () => {
    assert(/^[\w]{2}$/.test(randPath(1)));
  });

  it('returns random path n directoreis deep', () => {
    assert(/^([\w]{2}\/){1}[\w]{2}$/.test(randPath(2)), '2 dirs deep');
    assert(/^([\w]{2}\/){2}[\w]{2}$/.test(randPath(3)), '3 dirs deep');
    assert(/^([\w]{2}\/){3}[\w]{2}$/.test(randPath(4)), '4 dirs deep');
    assert(/^([\w]{2}\/){7}[\w]{2}$/.test(randPath(8)), '8 dirs deep');
  });

  it('returns random path 3 directoreis deep by default', () => {
    assert(/^([\w]{2}\/){2}[\w]{2}$/.test(randPath()), '3 dirs deep');
  });

  it('returns random path with n directoreis long', () => {
    assert(/^([\w]{1}\/){1}[\w]{1}$/.test(randPath(2, 1)), '1 dirs long');
    assert(/^([\w]{2}\/){1}[\w]{2}$/.test(randPath(2, 2)), '2 dirs long');
    assert(/^([\w]{4}\/){1}[\w]{4}$/.test(randPath(2, 4)), '4 dirs long');
  });
});
