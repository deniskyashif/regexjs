const { insertExplicitConcatSymbol, toPostfix } = require('./parser');
const { toNFA, recognize } = require('./nfa');

function createMatcher(exp) {
    const postfixExp = toPostfix(insertExplicitConcatSymbol(exp));
    const nfa = toNFA(postfixExp);

    return function(word) {
        return recognize(nfa, word);
    };
}

module.exports = { createMatcher };
