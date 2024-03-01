const { createMatcher } = require('./regex');
const readline = require('readline');

const match = createMatcher('(a|b)*c');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Pattern: `, (pattern) => {
    const match = createMatcher(pattern);

    console.log('Check words: ');

    rl.on('line', (input) => {
        console.log(`Match? ${match(input)}`);
    });
});
