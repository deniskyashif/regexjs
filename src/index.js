const { createMatcher } = require('./regex');

const match = createMatcher('a*b');

console.log(match('aaab'));
