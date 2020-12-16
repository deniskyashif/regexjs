# regexjs

[![Build Status](https://github.com/deniskyashif/regexjs/workflows/Node%20CI/badge.svg)](https://github.com/deniskyashif/ssfst/actions?query=workflow%3A%22Node+CI%22)

A regular expression engine implementation in JavaScript. It supports concatenation, union (|), zero-or-more (\*), one-or-more (+), and zero-or-one (?) operations as well as grouping. It follows Ken Thompson's algorithm for constructing an NFA from a regular expression.

Check out my [blog post](https://deniskyashif.com/2019/02/17/implementing-a-regular-expression-engine/) for the complete implementation details.

### Example
```javascript
const { createMatcher } = require('./regex');
const match = createMatcher('(a|b)*c');

match('ac'); // true
match('abc'); // true
match('aabababbbc'); // true
match('aaaab'); // false
```

### Try It
```
git clone https://github.com/deniskyashif/regexjs.git
cd regexjs
npm i
npm start
```

### Run the tests
`npm t`
