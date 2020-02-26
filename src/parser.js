function insertExpandedOneOrMoreOperator(exp) {
    // We rewrite, say:
    //    x*(a|b)+y+z*
    // as:
    //    x*((a|b)(a|b)*)(yy*)z*
    //
    let output = exp;
    let index = output.indexOf('+');

    // Do we have one or more term ending in '+'?
    while (index > 0) {

        // If so, rewrite them in-place (until we've exhausted all these '+'s)
        let h = index - 1;
        let c = 0;

        // If a closing parenthesis ')' is immediately preceding the '+',
        // we walk back, to lookup the balanced open parenthesis that matches it:
        while ((c += (output[h] === ')' ? 1 : output[h] === '(' ? -1 : 0)) !== 0) {
            h--;
        }

        const lhs = output.substr(0, h);
        const mid = output.substr(h, index - h); // That'd be the "(a|b)" and "y" term in the above example
        const rhs = output.substr(index + 1);

        output = lhs + "(" + mid + mid + "*)" + rhs; // Rewrite "...<term>+..." as "...(<term><term>*)..."
        index = output.indexOf('+');
    }
    return output;
};

function insertExplicitConcatOperator(exp) {
    let output = '';

    for (let i = 0; i < exp.length; i++) {
        const token = exp[i];
        output += token;

        if (token === '(' || token === '|') {
            continue;
        }

        if (i < exp.length - 1) {
            const lookahead = exp[i+1];

            if(lookahead === '*' || lookahead === '|' || lookahead === ')') {
                continue;
            }

            output += '.';
        }
    }

    return output;
};

function peek(stack) {
    return stack.length && stack[stack.length - 1];
}

const operatorPrecedence = {
    '|': 0,
    '.': 1,
    '*': 2
};

function toPostfix(exp) {
    let output = '';
    const operatorStack = [];

    for (const token of exp) {
        if (token === '.' || token === '|' || token === '*') {
            while(operatorStack.length && peek(operatorStack) !== '('
                  && operatorPrecedence[peek(operatorStack)] >= operatorPrecedence[token]) {
                output += operatorStack.pop();
            }

            operatorStack.push(token);
        } else if (token === '(' || token === ')') {
            if(token === '(') {
                operatorStack.push(token);
            } else {
                while(peek(operatorStack) !== '(') {
                    output += operatorStack.pop();
                }
                operatorStack.pop();
            }
        } else {
            output += token;
        }
    }

    while(operatorStack.length) {
        output += operatorStack.pop();
    }

    return output;
};

module.exports = {
    insertExpandedOneOrMoreOperator,
    insertExplicitConcatOperator,
    toPostfix
};
