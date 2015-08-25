# @starefossen/rand-path

[![Build status](https://img.shields.io/wercker/ci/55dc258586a50fca220ae773.svg "Build status")](https://app.wercker.com/project/bykey/2df0989284b71b22b33a3bd0555f445a)
[![NPM downloads](https://img.shields.io/npm/dm/@starefossen/rand-path.svg "NPM downloads")](https://www.npmjs.com/package/@starefossen/rand-path)
[![NPM version](https://img.shields.io/npm/v/@starefossen/rand-path.svg "NPM version")](https://www.npmjs.com/package/@starefossen/rand-path)
[![Node version](https://img.shields.io/node/v/@starefossen/rand-path.svg "Node version")](https://www.npmjs.com/package/@starefossen/rand-path)
[![Dependency status](https://img.shields.io/david/Starefossen/node-rand-path.svg "Dependency status")](https://david-dm.org/Starefossen/node-rand-path)

Dead simple random path generator.

## Requirements

Require Node.JS version `>= 0.10`.

## Install

```
npm install @starefossen/rand-path --save
```

## Usage

```
> var randPath = require('@starefossen/rand-path');
> randPath()
'wr/TB/s6'
> randPath(4)
'3J/P3/8K/y6'
> randPath(10)
'na/k5/uO/Ou/QE/TH/CS/N9/Gq/Zh'
```

## Test

```
npm test
```

## Collision Probability

With the default alphabet of 62 characters, this random path generator has a
`62^2n` (where `n` is the depth of path) probability for a collision. With the
default depth of `3` that is `1` in `56,800,235,584` chance.

## [MIT Licensed](https://github.com/Starefossen/node-rand-path/blob/master/LICENSE)
