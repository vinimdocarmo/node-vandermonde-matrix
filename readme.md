# node-vandermonde-matrix [![Build Status](https://travis-ci.org/vinimdocarmo/node-vandermonde-matrix.svg?branch=master)](https://travis-ci.org/vinimdocarmo/node-vandermonde-matrix)

In linear algebra, a Vandermonde matrix, named after Alexandre-Théophile Vandermonde, is a matrix with the terms of a geometric progression in each row, i.e., an m × n matrix. [see more](https://en.wikipedia.org/wiki/Vandermonde_matrix)

## Install

```
$ npm install --save vandermonde-matrix
```

## Usage

```js
var vandermondeMatrix = require('vandermonde-matrix');

vandermondeMatrix([1, 2, 3], 3);
//=> [[1, 1, 1], 
      [1, 2, 4], 
      [1, 3, 9]]
```
## API

### vandermondeMatrix(terms, degree)

#### terms

*Required*  
Type: `Array`

#### degree

*Required*
Type: `number`  

## License

MIT © [Vinícius do Carmo](http://vinimdocarmo.js.org)
