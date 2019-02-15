function createState(isEnd) {
    return {
        isEnd,
        transitions: {},
        epsilonTransitions: []
    };
}

function addEpsilonTransition(from, to) {
    from.epsilonTransitions.push(to);
}

function addTransition(from, to, symbol) {
    if(!from.transitions[symbol]) {
        from.transitions[symbol] = [];
    }

    from.transitions[symbol].push(to);
}

// constructs an NFA recognizing the empty string
function fromEpsilon() {
    const start = createState(false);
    const end = createState(true);
    addEpsilonTransition(start, end);
    
    return { start, end };
}

// constructs an NFA recognizing a single character
function fromSymbol(symbol) {
    const start = createState(false);
    const end = createState(true);
    addTransition(start, end, symbol);

    return { start, end };
}

function concat(first, second) {
    addEpsilonTransition(first.end, second.start);
    first.end.isEnd = false;

    return { start: first.start, end: second.end };
}

function union(first, second) {
    const start = createState(false);
    addEpsilonTransition(start, first.start);
    addEpsilonTransition(start, second.start);

    const end = createState(true);

    addEpsilonTransition(first.end, end);
    first.end.isEnd = false;
    addEpsilonTransition(second.end, end);
    second.end.isEnd = false;

    return { start, end };
}

function closure(nfa) {
    const start = createState(false);
    const end = createState(true);

    addEpsilonTransition(start, end);
    addEpsilonTransition(start, nfa.start);

    addEpsilonTransition(nfa.end, end);
    addEpsilonTransition(nfa.end, nfa.start);
    nfa.end.isEnd = false;

    return { start, end };
}

function toNFA(postfixExp) {
    if(postfixExp === '') {
        return fromEpsilon();
    }

    const stack = [];

    for (let i = 0; i < postfixExp.length; i++) {
        const token = postfixExp[i];

        if(token === '*') {
            stack.push(closure(stack.pop()));
        } else if (token === '|') {
            const right = stack.pop();
            const left = stack.pop();
            stack.push(union(left, right));
        } else if (token === '.') {
            const right = stack.pop();
            const left = stack.pop();
            stack.push(concat(left, right));
        } else {
            stack.push(fromSymbol(token));
        }
    }

    return stack.pop();
}

function move(state, visited, input, position) {
    if(visited.includes(state)) {
        return false;
    }

    visited.push(state);

    if(position === input.length) {
        if(state.isEnd) {
            return true;
        }

        if(state.epsilonTransitions.some(s => move(s, visited, input, position))) {
            return true;
        }
    } else {
        const transitions = state.transitions[input[position]];

        if(transitions && transitions.length) {
            if(transitions.some(s => move(s, [], input, position + 1))) {
                return true;
            }
        }

        if(state.epsilonTransitions.some(s => move(s, visited, input, position))) {
            return true;
        }        

        return false;
    }
}

function addStatesToVisit(state, nextStates, visited) {
    if (nextStates.indexOf(state) !== -1) {
        return;
    }

    if (state.epsilonTransitions && state.epsilonTransitions.length) {
        state.epsilonTransitions.forEach(s => {
            if (visited.indexOf(s) === -1) {
                visited.push(s);
                addStatesToVisit(s, nextStates, visited);
            }
        });
    } else {
        nextStates.push(state);
    }   
}

function search(nfa, word) {
    let currentStates = [];
    addStatesToVisit(nfa.start, currentStates, []);
    
    for (let i = 0; i < word.length && currentStates.length; i++) {
        const symbol = word[i];
        let nextStates = [];

        currentStates.forEach(state => {
            if (state.transitions[symbol]) {
                state.transitions[symbol].forEach(s => addStatesToVisit(s, nextStates, []));
            }            
        });

        currentStates = nextStates;
    }

    return currentStates.find(s => s.isEnd);
}

function recognize(nfa, word) {
    return search(nfa, word);
}

module.exports = {
    toNFA,
    recognize
};
