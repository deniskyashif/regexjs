const { insertExplicitConcatOperator, insertExpandedOneOrMoreOperator, toPostfix } = require('./parser');
const { toNFA, toNFAFromInfixExp, recognize } = require('./nfa');

function createMatcher(exp) {
    const expWithOneOrMoreOperator = insertExpandedOneOrMoreOperator(exp);
    const expWithConcatenationOperator = insertExplicitConcatOperator(expWithOneOrMoreOperator);
    
    // Generates an NFA using a stack
    const postfixExp = toPostfix(expWithConcatenationOperator);
    const nfa = toNFA(postfixExp);

    // Generates an NFA by constructing a parse tree
    // const nfa = toNFAFromInfixExp(expWithConcatenationOperator);
    
    return word => recognize(nfa, word);
}

module.exports = { createMatcher };
