


const OPENERS = {
    CURVE: '(',
    CURLY: '{',
    SQUARE: '[',
}

const types = {
    CURVED: 'CURVED',
    CURLY: 'CURLY',
    SQUARE: 'SQUARE',
    UNMATCHED_CLOSER: 'unmatched closer'
}

main()

function main() {
    var gen = readLine()

    for (var a0 = 0; a0 < 6; a0++){
        var expression = gen.next().value        
        checkExpression(expression)        
    }
}

function checkExpression(expression) {
    var brackets = expression.split('')
    var tokens = brackets.map(bracket => {
        return {type: _getType(bracket), opener: _isOpener(bracket), matched: false}
    })

    for (var i = 0; i < tokens.length; i++) {
        var currentToken = tokens[i]
        var prevToken;
        
        if (!currentToken.opener ) {
            if (i === 0) {
                console.log('TOKENS AFTER -- ', tokens.filter(token => !token.matched))      
                return console.log('NO')
            }
            prevToken = _getPrevOpener(tokens, i)

            if (prevToken.type === currentToken.type) {
                prevToken.matched = true
                currentToken.matched = true
            } else {
                return console.log('NO')
            }
        } 
    }
    console.log('YES')
}

function* readLine() {
    yield '([{}])';
    yield '(({[{}]}))';
    yield '(]{})';
    yield '()){[]}';
    yield '()){[}]';
    yield '(({)})';
}



function _isOpener(bracket) {
    return bracket === OPENERS.CURVE ||
    bracket === OPENERS.CURLY ||
    bracket === OPENERS.SQUARE
}

function _getType(bracket) {
    switch(bracket) {
        case '(':
        case ')':
            return types.CURVED
        
        case '{':
        case '}':
            return types.CURLY
        
        case '[':
        case ']':
            return types.SQUARE
    }
}

function _getPrevOpener(tokens, index) {
    for (var i = index-1; i > -1; i--) {
        var prevToken = tokens[i]
        if (prevToken.opener && !prevToken.matched) {
            return prevToken
        }
    }
    return {type: 'unmatched'}
}
