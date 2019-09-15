// Generated from Regex.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RegexListener = require('./RegexListener').RegexListener;
var RegexVisitor = require('./RegexVisitor').RegexVisitor;

var grammarFileName = "Regex.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\b\u001e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u000f\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "\u0019\n\u0003\f\u0003\u000e\u0003\u001c\u000b\u0003\u0003\u0003\u0002",
    "\u0003\u0004\u0004\u0002\u0004\u0002\u0002\u0002\u001f\u0002\u0006\u0003",
    "\u0002\u0002\u0002\u0004\u000e\u0003\u0002\u0002\u0002\u0006\u0007\u0005",
    "\u0004\u0003\u0002\u0007\u0003\u0003\u0002\u0002\u0002\b\t\b\u0003\u0001",
    "\u0002\t\n\u0007\u0003\u0002\u0002\n\u000b\u0005\u0004\u0003\u0002\u000b",
    "\f\u0007\u0004\u0002\u0002\f\u000f\u0003\u0002\u0002\u0002\r\u000f\u0007",
    "\b\u0002\u0002\u000e\b\u0003\u0002\u0002\u0002\u000e\r\u0003\u0002\u0002",
    "\u0002\u000f\u001a\u0003\u0002\u0002\u0002\u0010\u0011\f\u0005\u0002",
    "\u0002\u0011\u0012\u0007\u0006\u0002\u0002\u0012\u0019\u0005\u0004\u0003",
    "\u0006\u0013\u0014\f\u0004\u0002\u0002\u0014\u0015\u0007\u0007\u0002",
    "\u0002\u0015\u0019\u0005\u0004\u0003\u0005\u0016\u0017\f\u0006\u0002",
    "\u0002\u0017\u0019\u0007\u0005\u0002\u0002\u0018\u0010\u0003\u0002\u0002",
    "\u0002\u0018\u0013\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002\u0002",
    "\u0002\u0019\u001c\u0003\u0002\u0002\u0002\u001a\u0018\u0003\u0002\u0002",
    "\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u0005\u0003\u0002\u0002",
    "\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u0005\u000e\u0018\u001a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'*'", "'.'", "'|'" ];

var symbolicNames = [ null, null, null, null, null, null, "SYMBOL" ];

var ruleNames =  [ "start", "expr" ];

function RegexParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RegexParser.prototype = Object.create(antlr4.Parser.prototype);
RegexParser.prototype.constructor = RegexParser;

Object.defineProperty(RegexParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RegexParser.EOF = antlr4.Token.EOF;
RegexParser.T__0 = 1;
RegexParser.T__1 = 2;
RegexParser.T__2 = 3;
RegexParser.T__3 = 4;
RegexParser.T__4 = 5;
RegexParser.SYMBOL = 6;

RegexParser.RULE_start = 0;
RegexParser.RULE_expr = 1;


function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegexParser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegexListener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegexListener ) {
        listener.exitStart(this);
	}
};

StartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegexVisitor ) {
        return visitor.visitStart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegexParser.StartContext = StartContext;

RegexParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RegexParser.RULE_start);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegexParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.SYMBOL = function() {
    return this.getToken(RegexParser.SYMBOL, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegexListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegexListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegexVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RegexParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, RegexParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RegexParser.T__0:
            this.state = 7;
            this.match(RegexParser.T__0);
            this.state = 8;
            this.expr(0);
            this.state = 9;
            this.match(RegexParser.T__1);
            break;
        case RegexParser.SYMBOL:
            this.state = 11;
            this.match(RegexParser.SYMBOL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 24;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 22;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RegexParser.RULE_expr);
                    this.state = 14;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 15;
                    this.match(RegexParser.T__3);
                    this.state = 16;
                    this.expr(4);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RegexParser.RULE_expr);
                    this.state = 17;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 18;
                    this.match(RegexParser.T__4);
                    this.state = 19;
                    this.expr(3);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RegexParser.RULE_expr);
                    this.state = 20;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 21;
                    this.match(RegexParser.T__2);
                    break;

                } 
            }
            this.state = 26;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


RegexParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

RegexParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		case 2:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.RegexParser = RegexParser;
