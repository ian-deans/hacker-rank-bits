console.log('Running....')



function* readLine() {
    yield '([{}])';
    yield '(({[{}]}))';
    yield '(]{})'
}

var OPENERS = {
    CURVE: '(',
    CURLY: '{',
    SQUARE: '[',
}

var CLOSER = {
    CURVE: ')',
    CURLY: '}',
    SQUARE: ']',
}

function _isOpener(bracket) {
    return bracket === OPENERS.CURVE || 
    bracket === OPENERS.CURLY || 
    bracket === OPENERS.SQUARE
}

const programThing = () => {

    var gen = readLine()

    for (var a0 = 0; a0 < 3; a0++){
        console.log('Loop 1...')
        var expression = gen.next().value
        console.log(expression, 'EXPRESSION')
        var brackets = expression.slice('')
        var tokens = []
        
        for (var b in brackets) {
            var tempToken = {type: brackets[b], closed: false}

            if (_isOpener(tempToken.type)) {
                console.log(`TYPE: ${brackets[b]} is an opener.`)

                tokens.push(tempToken)
                console.log('TOKENS after push: ', tokens)

            } else {
                console.log(`-- closing token -- ${tempToken.type}`)
                for (var t = tokens.length-1; t > -1; t--) {

                    if (tokens[t].type === brackets[b].type && !tokens[t].closed) {
                        return tokens[t].closed = true
                    }
                }
            }
        
        var result = tokens.filter(token => token.closed)
    }
    var output = result.length > 0 ? 'NO' : 'YES'
    console.log(output)
    }
}
 programThing()