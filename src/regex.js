const { insertExplicitConcatOperator, toPostfix } = require('./parser');
const { toNFA, recognize } = require('./nfa');

function createMatcher(exp) {
    const postfixExp = toPostfix(insertExplicitConcatOperator(exp));
    const nfa = toNFA(postfixExp);

    return word => recognize(nfa, word);
}

module.exports = { createMatcher };
