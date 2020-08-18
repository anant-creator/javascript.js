/* HERE WE ARE GOING TO CHANGE OUR RS IN SMALL UNITS */
arr = []
function change(n, ar) {
    while (n > 0) {
        if (n > 25) {
            n -= 25
            ar.push(25)
        } else if (n < 25 && n >= 10) {
            n -= 10
            ar.push(10)
        } else if (n < 10 && n >= 5) {
            n -= 5
            ar.push(5)
        } else if (n < 5 && n >= 2) {
            n -= 2
            ar.push(2)
        } else {
            n -= 1
            ar.push(1)
        }
    }
    return ar
}

console.log(change(97, arr));
         
