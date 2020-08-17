/*
  Thompson NFA Construction and Search.
*/

/*
  A state in Thompson's NFA can either have 
   - a single symbol transition to a state
    or
   - up to two epsilon transitions to another states
  but not both.   
*/
function createState(isEnd) {
    return {
        isEnd,
        transition: {},
        epsilonTransitions: []
    };
}

function addEpsilonTransition(from, to) {
    from.epsilonTransitions.push(to);
}

/*
  Thompson's NFA state can have only one transition to another state for a given symbol.
*/
function addTransition(from, to, symbol) {
    from.transition[symbol] = to;
}

/*
  Construct an NFA that recognizes only the empty string.
*/
function fromEpsilon() {
    const start = createState(false);
    const end = createState(true);
    addEpsilonTransition(start, end);

    return { start, end };
}

/* 
   Construct an NFA that recognizes only a single character string.
*/
function fromSymbol(symbol) {
    const start = createState(false);
    const end = createState(true);
    addTransition(start, end, symbol);

    return { start, end };
}

/* 
   Concatenates two NFAs.
*/
function concat(first, second) {
    addEpsilonTransition(first.end, second.start);
    first.end.isEnd = false;

    return { start: first.start, end: second.end };
}

/* 
   Unions two NFAs.
*/
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


/* 
   Apply Closure (Kleene's Star) on an NFA.
*/
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

/*
    Zero-or-one of an NFA.
*/

function zeroOrOne(nfa) {
    const start = createState(false);
    const end = createState(true);

    addEpsilonTransition(start, end);
    addEpsilonTransition(start, nfa.start);

    addEpsilonTransition(nfa.end, end);
    nfa.end.isEnd = false;

    return { start, end };
}

/*
    One on more of an NFA.
*/

function oneOrMore(nfa) {
    const start = createState(false);
    const end = createState(true);

    addEpsilonTransition(start, nfa.start);

    addEpsilonTransition(nfa.end, end);
    addEpsilonTransition(nfa.end, nfa.start);
    nfa.end.isEnd = false;

    return { start, end };
}

/*
  Converts a postfix regular expression into a Thompson NFA.
*/
function toNFA(postfixExp) {
    if (postfixExp === '') {
        return fromEpsilon();
    }

    const stack = [];

    for (const token of postfixExp) {
        if (token === '*') {
            stack.push(closure(stack.pop()));
        } else if (token === "?") {
            stack.push(zeroOrOne(stack.pop()));
        } else if (token === "+") {
            stack.push(oneOrMore(stack.pop()));
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

/*
  Regex to NFA construction using a parse tree.
*/
const antlr = require('antlr4');
const RegexLexer = require('./grammar/RegexLexer').RegexLexer;
const RegexParser = require('./grammar/RegexParser').RegexParser;
const RegexVisitor = require('./grammar/RegexVisitor').RegexVisitor;

class RegexToNFAVisitor extends RegexVisitor {
    visitStart(ctx) {
        return this.visit(ctx.getChild(0));
    }

    visitExpr(ctx) {
        if (ctx.children.length === 1) {
            return fromSymbol(ctx.getChild(0).getText());
        }

        if (ctx.children.length === 2 && ctx.getChild(1).getText() === '*') {
            const leftEvaluated = this.visit(ctx.getChild(0));
            return closure(leftEvaluated);
        }

        const left = ctx.getChild(0);
        const mid = ctx.getChild(1);
        const right = ctx.getChild(2);

        if (left.getText() === '(' && right.getText() === ')') {
            return this.visit(mid);
        }

        const leftEvaluated = this.visit(left);
        const rightEvaluated = this.visit(right);

        return mid.getText() === '|'
            ? union(leftEvaluated, rightEvaluated)
            : concat(leftEvaluated, rightEvaluated);
    }
}

function toNFAFromInfixExp(infixExp) {
    if (infixExp === '') {
        return fromEpsilon();
    }

    const chars = new antlr.InputStream(infixExp);
    const lexer = new RegexLexer(chars);
    const tokens = new antlr.CommonTokenStream(lexer);
    const parser = new RegexParser(tokens);
    const parseTree = parser.start();
    const nfa = parseTree.accept(new RegexToNFAVisitor());

    return nfa;
}

/*
  Process a string through an NFA by recurisively (depth-first) traversing all the possible paths until finding a matching one.
  
  The NFA has N states, from each state it can go to at most N possible states, yet there might be at most 2^N possible paths, 
  therefore, worst case it'll end up going through all of them until it finds a match (or not), resulting in very slow runtimes.
*/
function recursiveBacktrackingSearch(state, visited, input, position) {
    if (visited.includes(state)) {
        return false;
    }

    visited.push(state);

    if (position === input.length) {
        if (state.isEnd) {
            return true;
        }

        if (state.epsilonTransitions.some(s => recursiveBacktrackingSearch(s, visited, input, position))) {
            return true;
        }
    } else {
        const nextState = state.transition[input[position]];

        if (nextState) {
            if (recursiveBacktrackingSearch(nextState, [], input, position + 1)) {
                return true;
            }
        } else {
            if (state.epsilonTransitions.some(s => recursiveBacktrackingSearch(s, visited, input, position))) {
                return true;
            }
        }

        return false;
    }
}

/* 
   Follows through the epsilon transitions of a state until reaching
   a state with a symbol transition which gets added to the set of next states.
*/
function addNextState(state, nextStates, visited) {
    if (state.epsilonTransitions.length) {
        for (const st of state.epsilonTransitions) {
            if (!visited.find(vs => vs === st)) {
                visited.push(st);
                addNextState(st, nextStates, visited);
            }
        }
    } else {
        nextStates.push(state);
    }
}

/*
  Process a string through an NFA. For each input symbol it transitions into in multiple states at the same time.
  The string is matched if after reading the last symbol, is has transitioned into at least one end state.

  For an NFA with N states in can be at at most N states at a time. This algorighm finds a match by processing the input word once.
*/
function search(nfa, word) {
    let currentStates = [];
    /* The initial set of current states is either the start state or
       the set of states reachable by epsilon transitions from the start state */
    addNextState(nfa.start, currentStates, []);

    for (const symbol of word) {
        const nextStates = [];

        for (const state of currentStates) {
            const nextState = state.transition[symbol];
            if (nextState) {
                addNextState(nextState, nextStates, []);
            }
        }

        currentStates = nextStates;
    }

    return currentStates.find(s => s.isEnd) ? true : false;
}

function recognize(nfa, word) {
    // return recursiveBacktrackingSearch(nfa.start, [], word, 0);
    return search(nfa, word);
}

module.exports = {
    toNFA,
    toNFAFromInfixExp,
    recognize
};
