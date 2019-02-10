const {
    insertExplicitConcatSymbol,
    toPostfix
} = require('../src/parser');

describe('insertExplicitConcatSymbol tests', () => {
    test('call with "" should return ""', () => {
        expect(insertExplicitConcatSymbol('')).toEqual('');
    });

    test('call with "a*" should return "a*"', () => {
        expect(insertExplicitConcatSymbol('a*')).toEqual('a*');
    });

    test('call with "a|b" should return "a|b"', () => {
        expect(insertExplicitConcatSymbol('a|b')).toEqual('a|b');
    });
    
    test('call with "ab" should return "a.b"', () => {
        expect(insertExplicitConcatSymbol('ab')).toEqual('a.b');
    });

    test('call with "abcabc" should return "a.b.c.a.b.c"', () => {
        expect(insertExplicitConcatSymbol('abcabc')).toEqual('a.b.c.a.b.c');
    });

    test('call with "ab*" should return "a.b*"', () => {
        expect(insertExplicitConcatSymbol('ab*')).toEqual('a.b*');
    });

    test('call with "ab*" should return "a*b*"', () => {
        expect(insertExplicitConcatSymbol('a*b*')).toEqual('a*.b*');
    });

    test('call with "ab*c" should return "a.b*.c"', () => {
        expect(insertExplicitConcatSymbol('ab*c')).toEqual('a.b*.c');
    });

    test('call with "ab*(cdd)" should return "a.b*.(c.d.d)"', () => {
        expect(insertExplicitConcatSymbol('ab*(cdd)')).toEqual('a.b*.(c.d.d)');
    });

    test('call with "(a|b)*c" should return "(a|b)*.c"', () => {
        expect(insertExplicitConcatSymbol('(a|b)*c')).toEqual('(a|b)*.c');
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
        expect(toPostfix('a.b')).toEqual('ab.');
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

    test('call with ((a.b)) should return ab.', () => {
        expect(toPostfix('((a.b))')).toEqual('ab.');
    });

    test('call with ((a.b)*) should return ab.*', () => {
        expect(toPostfix('((a.b)*)')).toEqual('ab.*');
    });
});

