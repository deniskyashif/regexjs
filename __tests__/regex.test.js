const { createMatcher } = require('../src/regex');

describe.only('createMatcher tests', () => {
    test('from empty string should recognize only empty string', () => {
        const match = createMatcher('');
        expect(match('')).toBeTruthy();
        expect(match('a')).toBeFalsy();
        expect(match(' ab')).toBeFalsy();
    });

    test('from a* should recognize strings of arbitrary number of a\'s', () => {
        const match = createMatcher('a*');
        expect(match('')).toBeTruthy();
        expect(match('aaaa')).toBeTruthy();
        expect(match('aa')).toBeTruthy();
        expect(match('aba')).toBeFalsy();
    });

    test('from a*b should recognize strings of arbitrary number of a\'s ending with b', () => {
        const match = createMatcher('a*b');
        expect(match('')).toBeFalsy();
        expect(match('aaaab')).toBeTruthy();
        expect(match('aab')).toBeTruthy();
        expect(match('b')).toBeTruthy();
        expect(match('aba')).toBeFalsy();
    });    
});
