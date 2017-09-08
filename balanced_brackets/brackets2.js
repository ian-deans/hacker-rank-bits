

const types = {
  CURVE: 'curve',
  CURLY: 'curly',
  SQUARE: 'square',
}

const _getType = bracket => {
  switch(bracket) {
    case '(':
    case ')':
      return types.CURVE

    case '{':
    case '}':
      return types.CURLY

    case '[':
    case ']':
      return types.SQUARE

    default:
      throw 'Unknown bracket type'
  }
}

const _isOpener = bracket => 
  bracket === '(' ||
  bracket === '{' ||
  bracket === '['

function* getInput() {
  yield '([{}])';
  yield '(({[{}]}))';
  yield '(]{})';
  yield '()){[]}';
  yield '}()){[}]';
  yield '(({)})';
}

const handleExpression = expression => {
  console.log(`\nHandling expression ${expression}...`)

  const tokens = expression.split('').map(bracket => {
    return {type: _getType(bracket), opener: _isOpener(bracket) }
  })
  const tokenStack = []

  let result = 'YES'
  
  for (token of tokens) {
    if (token.opener) {
      tokenStack.push(token)
    } else {
      let prevOpener = tokenStack.pop()

      if ( !prevOpener || token.type !== prevOpener.type ) {
        result = 'NO'
        break
      }
    }
  }
  console.log(result)
}

function main() {
  const gen = getInput()

  for (let x = 0; x < 5; x++) {
    let expression = gen.next().value
    handleExpression(expression)
  }
}

main()
