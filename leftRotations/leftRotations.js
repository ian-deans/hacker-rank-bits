let n = 5
let d = 3

const range = n => Array.from({length: n}, (value, key) => key+1)

let disArray = range(n)

let chunk = disArray.splice(0, d)


let newArray = disArray.concat(chunk)

console.log(newArray.join(' '))