// Generated from Regex.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b\u001b\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0002\u0002\b\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u0003\u0002\u0003\u0006\u0002\"\"2;C\\c|\u0002\u001a\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0003",
    "\u000f\u0003\u0002\u0002\u0002\u0005\u0011\u0003\u0002\u0002\u0002\u0007",
    "\u0013\u0003\u0002\u0002\u0002\t\u0015\u0003\u0002\u0002\u0002\u000b",
    "\u0017\u0003\u0002\u0002\u0002\r\u0019\u0003\u0002\u0002\u0002\u000f",
    "\u0010\u0007*\u0002\u0002\u0010\u0004\u0003\u0002\u0002\u0002\u0011",
    "\u0012\u0007+\u0002\u0002\u0012\u0006\u0003\u0002\u0002\u0002\u0013",
    "\u0014\u0007,\u0002\u0002\u0014\b\u0003\u0002\u0002\u0002\u0015\u0016",
    "\u00070\u0002\u0002\u0016\n\u0003\u0002\u0002\u0002\u0017\u0018\u0007",
    "~\u0002\u0002\u0018\f\u0003\u0002\u0002\u0002\u0019\u001a\t\u0002\u0002",
    "\u0002\u001a\u000e\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function RegexLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

RegexLexer.prototype = Object.create(antlr4.Lexer.prototype);
RegexLexer.prototype.constructor = RegexLexer;

Object.defineProperty(RegexLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

RegexLexer.EOF = antlr4.Token.EOF;
RegexLexer.T__0 = 1;
RegexLexer.T__1 = 2;
RegexLexer.T__2 = 3;
RegexLexer.T__3 = 4;
RegexLexer.T__4 = 5;
RegexLexer.SYMBOL = 6;

RegexLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

RegexLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

RegexLexer.prototype.literalNames = [ null, "'('", "')'", "'*'", "'.'", 
                                      "'|'" ];

RegexLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                       "SYMBOL" ];

RegexLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                   "SYMBOL" ];

RegexLexer.prototype.grammarFileName = "Regex.g4";



exports.RegexLexer = RegexLexer;

