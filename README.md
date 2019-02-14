## regexjs

A simple regular expression engine implemented in JavaScript. It supports concatenation, union (|) and closure (*) operations as well as grouping. It follows Thompson's algorithm for constructing an NFA from a given regular expression.

Check out this [blog post](deniskyashif.com) to learn about the implementation details.

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


