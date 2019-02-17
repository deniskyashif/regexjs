## regexjs

A simple regular expression engine implemented in JavaScript. It supports concatenation, union (|) and closure (*) operations as well as grouping. It follows Ken Thompson's algorithm for constructing an NFA from a regular expression.

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
