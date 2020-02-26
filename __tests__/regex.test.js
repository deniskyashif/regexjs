const { createMatcher } = require('../src/regex');

describe('createMatcher tests', () => {
    test('from empty string should recognize only empty string', () => {
        const match = createMatcher('');
        expect(match('')).toBeTruthy();
        expect(match('a')).toBeFalsy();
        expect(match(' ab')).toBeFalsy();
    });

    test('from a should recognize strings of arbitrary number of a', () => {
        const match = createMatcher('a');
        expect(match('')).toBeFalsy();
        expect(match('a')).toBeTruthy();
        expect(match('aaa')).toBeFalsy();
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

    // regex for all binary numbers divisible by 3
    test('from "(0|(1(01*(00)*0)*1)*)*" should recognize its language', () => {
        const match = createMatcher('(0|(1(01*(00)*0)*1)*)*');
        expect(match('')).toBeTruthy();
        expect(match('0')).toBeTruthy();
        expect(match('00')).toBeTruthy();
        expect(match('11')).toBeTruthy();
        expect(match('000')).toBeTruthy();
        expect(match('011')).toBeTruthy();
        expect(match('110')).toBeTruthy();
        expect(match('0000')).toBeTruthy();
        expect(match('0011')).toBeTruthy();
    });

    test('from "(a|b)*c" should recognize strings with arbitrary number of a\'s and b\'s ending with c', () => {
        const match = createMatcher('(a|b)*c');
        expect(match('c')).toBeTruthy();
        expect(match('ac')).toBeTruthy();
        expect(match('ababc')).toBeTruthy();
        expect(match('bbbc')).toBeTruthy();
        expect(match('aaaaaaac')).toBeTruthy();
        expect(match('ac')).toBeTruthy();
        expect(match('bac')).toBeTruthy();
        expect(match('abbbbc')).toBeTruthy();
        expect(match('cc')).toBeFalsy();
        expect(match('a')).toBeFalsy();
        expect(match('b')).toBeFalsy();
        expect(match('ababab')).toBeFalsy();
    });

    test('from "(a|b)+c" should recognize strings with a greater-than-zero number of a\'s and b\'s ending with c', () => {
        const match = createMatcher('(a|b)+c');
        expect(match('c')).toBeFalsy(); // (missing leading a's or b's)
        expect(match('ac')).toBeTruthy();
        expect(match('ababc')).toBeTruthy();
        expect(match('bbbc')).toBeTruthy();
        expect(match('aaaaaaac')).toBeTruthy();
        expect(match('ac')).toBeTruthy();
        expect(match('bac')).toBeTruthy();
        expect(match('abbbbc')).toBeTruthy();
        expect(match('cc')).toBeFalsy(); // (missing leading a's or b's)
        expect(match('a')).toBeFalsy(); // (missing trailing c)
        expect(match('b')).toBeFalsy(); // (idem)
        expect(match('ababab')).toBeFalsy(); // (idem)
    });

    test('from "0x(0|1|2|3|4|5|6|7|8|9|a|b|c|d|e|f)+" should recognize the writing of an hexadecimal number', () => {
        const match = createMatcher('0x(0|1|2|3|4|5|6|7|8|9|a|b|c|d|e|f)+');
        expect(match('0')).toBeFalsy(); // (missing preamble)
        expect(match('x')).toBeFalsy(); // (bad preamble #1)
        expect(match('x0')).toBeFalsy(); // (bad preamble #2)
        expect(match('0x')).toBeFalsy(); // (missing digits)
        expect(match('0x0')).toBeTruthy();
        expect(match('0x1')).toBeTruthy();
        expect(match('0x2')).toBeTruthy();
        expect(match('0x3')).toBeTruthy();
        expect(match('0xf')).toBeTruthy();
        expect(match('0x0a')).toBeTruthy();
        expect(match('0x20')).toBeTruthy();
        expect(match('0xfee1600d')).toBeTruthy();
        expect(match('0xfee1Dead')).toBeFalsy(); // (capital 'D' not a recognized hexadecimal digit)
    });

    test('from "abc|def" should recognize strings of abc or def', () => {
        const match = createMatcher('abc|def');
        expect(match('abc')).toBeTruthy();
        expect(match('def')).toBeTruthy();
        expect(match('ab')).toBeFalsy();
        expect(match('ef')).toBeFalsy();
    });

    test('from "a(b*|c)" should recognize strings starting with a followed by b\'s or a single c', () => {
        const match = createMatcher('a(b*|c)');
        expect(match('ac')).toBeTruthy();
        expect(match('abbbb')).toBeTruthy();
        expect(match('ab')).toBeTruthy();
        expect(match('a')).toBeTruthy();
        expect(match('abc')).toBeFalsy();
        expect(match('acc')).toBeFalsy();
        expect(match('')).toBeFalsy();
    });
});
