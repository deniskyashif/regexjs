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
    if(from.transitions[symbol]) {
        from.transitions[symbol] = [];
    }
    from.transitions[symbol].push(to);
}

function concat(first, second) {
    addEpsilonTransition(first.end, second.start);
    first.end.isEnd = false;

    return { start: first.start, end: second.end };
}

function union(first, second) {
    const start = createState();
    addEpsilonTransition(start, first.start);
    addEpsilonTransition(start, second.start);

    const end = createState(true);

    addEpsilonTransition(first.end, end);
    first.isEnd = false;
    addEpsilonTransition(second.end, end);
    second.isEnd = false;

    return { start, end };
}

function closure(nfa) {
    const start = createState();
    const end = createState(true);

    addEpsilonTransition(start, end);
    addEpsilonTransition(start, nfa.start);

    addEpsilonTransition(nfa.end, end);
    addEpsilonTransition(nfa.end, nfa.start);
    nfa.end.isEnd = false;

    return { start, end };
}

function createEpsilonNFA() {
    const start = createState();
    const end = createState(true);
    addEpsilonTransition(start, end);
    
    return { start, end };
}

function createSymbolNFA(symbol) {
    const start = createState();
    const end = createState(true);
    addTransition(start, end, symbol);

    return { start, end };
}
