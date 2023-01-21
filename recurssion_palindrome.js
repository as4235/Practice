let i = 0;
let result;
function pal(n) {
    if (n.length == 1) { result = true }
    else if (n[i] !== n[n.length - 1 - i]) {
        result = false
    }
    else if (i >= n.length - 1 - i) {
        return result
    }
    else {
        i++
        result = true;
        pal(n)
    }
    return result
}

console.log(pal('xyzzyx'))