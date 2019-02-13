const { insertExplicitConcatOperator, toPostfix } = require('./parser');
const { toNFA, recognize } = require('./nfa');

function createMatcher(exp) {
    const postfixExp = toPostfix(insertExplicitConcatOperator(exp));
    const nfa = toNFA(postfixExp);

    return function(word) {
        return recognize(nfa, word);
    };
}

module.exports = { createMatcher };
