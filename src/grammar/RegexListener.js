// Generated from Regex.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RegexParser.
function RegexListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RegexListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RegexListener.prototype.constructor = RegexListener;

// Enter a parse tree produced by RegexParser#start.
RegexListener.prototype.enterStart = function(ctx) {
};

// Exit a parse tree produced by RegexParser#start.
RegexListener.prototype.exitStart = function(ctx) {
};


// Enter a parse tree produced by RegexParser#expr.
RegexListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by RegexParser#expr.
RegexListener.prototype.exitExpr = function(ctx) {
};



exports.RegexListener = RegexListener;