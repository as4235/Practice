function ex(a, b) {
    let prod = a;
    for (let i = 1; i < b; i++) {
        prod *= a
        // console.log(a)
    }
    return prod
}
let count = 0;
let prod = 1;
function exp(a, b) {
    if (count !== b) {
        prod *= a;
        count++
        exp(a, b)
    }
    return prod
}

console.log(exp(8, 1))
// exp(2, 3)
