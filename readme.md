# node-vandermonde-matrix [![Build Status](https://travis-ci.org/vinimdocarmo/node-vandermonde-matrix.svg?branch=master)](https://travis-ci.org/vinimdocarmo/node-vandermonde-matrix)

In linear algebra, a Vandermonde matrix is a matrix with the terms of a geometric progression in each row, i.e., an m × n matrix. [see more](https://en.wikipedia.org/wiki/Vandermonde_matrix)

![vandermonde matrix d](https://upload.wikimedia.org/math/6/4/2/642ce6b42c22729068792a6496d81ee7.png)

## Install

```
$ npm install --save vandermonde-matrix
```

## Usage

```js
var vandermondeMatrix = require('vandermonde-matrix');

vandermondeMatrix([1, 2, 3], 3);
//=> [[1, 1, 1], 
//    [1, 2, 4], 
//    [1, 3, 9]]
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
