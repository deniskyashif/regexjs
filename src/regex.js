const { insertExplicitConcatSymbol, toPostfix } = require('./parser');

function compile(postfix) {
    
}

function recognize(nfa, word) {
    
}

function createMatcher(exp) {
    const nfa = compile(toPostfix(insertExplicitConcatSymbol(exp)));

    return function(word) {
        return recognize(nfa, word);
    };
}

