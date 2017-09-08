var socks = [10, 20, 20, 10, 10, 30, 50, 10]

var pairs = 0

while (socks.length > 1) {
    var sock = socks.shift()
    console.log('SOCK', sock)
    console.log('SOCKs', socks)
    for (var i=0; i<socks.length; i++) {
        if (sock === socks[i]) {
            pairs++
            socks = socks.filter((sock, index) => index !== i)
            break
        }
    }
}
console.log(pairs)