// Generated from Regex.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RegexParser.

function RegexVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RegexVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RegexVisitor.prototype.constructor = RegexVisitor;

// Visit a parse tree produced by RegexParser#start.
RegexVisitor.prototype.visitStart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RegexParser#expr.
RegexVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.RegexVisitor = RegexVisitor;