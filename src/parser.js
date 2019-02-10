const operators = {
    concat: '.',
    union: '|',
    closure: '*'
};

function insertExplicitConcatenationSymbol(exp) {
    let output = '';

    for (let i = 0; i < exp.length; i++) {
        const symbol = exp[i];
    }

    return output;
};

function toPostfix(exp) {
    return exp;
};

module.exports = {
    insertExplicitConcatenationSymbol,
    toPostfix
};

