const {
    insertExplicitConcatenationSymbol,
    toPostfix
} = require('../src/parser');

describe('insertExplicitConcatenationSymbol tests', () => {
    test('call with "" should return ""', () => {
        expect(insertExplicitConcatenationSymbol('')).toEqual('');
    });

    test('call with "a*" should return "a*"', () => {
        expect(insertExplicitConcatenationSymbol('a*')).toEqual('a*');
    });

    test('call with "a|b" should return "a|b"', () => {
        expect(insertExplicitConcatenationSymbol('a|b')).toEqual('a|b');
    });
    
    test('call with "ab" should return "a.b"', () => {
        expect(insertExplicitConcatenationSymbol('ab')).toEqual('a.b');
    });

    test('call with "abcabc" should return "a.b.c.a.b.c"', () => {
        expect(insertExplicitConcatenationSymbol('abcabc')).toEqual('a.b.c.a.b.c');
    });
});

describe('toPostfix tests', () => {
    test('call with "" should return ""', () => {
        expect(toPostfix('')).toEqual('');
    });

    test('call with "a" should return "a"', () => {
        expect(toPostfix('a')).toEqual('a');
    });

    test('call with "a.b" should return "ab."', () => {
        expect(toPostfix('a.b')).toEqual('ab');
    });

    test('call with "a*" should return "a*"', () => {
        expect(toPostfix('a*')).toEqual('a*');
    });

    test('call with "a*.b" should return "a*b."', () => {
        expect(toPostfix('a*.b')).toEqual('a*b.');
    });

    test('call with "a|b*" should return "ab*|"', () => {
        expect(toPostfix('a|b*')).toEqual('ab*|');
    });
    
    test('call with "a.(b|c)*.d" should return "abc|*.d."', () => {
        expect(toPostfix('a.(b|c)*.d')).toEqual('abc|*.d.');
    });
});

