grammar Regex;

start: expr ;
expr: 
    '('expr')'
    | expr'*'
    | expr'.'expr
    | expr'|'expr
    | SYMBOL ;

SYMBOL: [a-zA-Z0-9 ];