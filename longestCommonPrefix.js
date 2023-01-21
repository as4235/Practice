var romanToInt = function (s) {
    let table = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (table[s[i]] < table[s[i + 1]]) {
            result -= table[s[i]]
        }
        else {
            result += table[s[i]]
        }
    }
    return console.log(result)
};

var longestCommonPrefix = function (strs) {
    let sample = [];
    let result = '';
    if (strs[0] === "") {
        result = ''
    } else if (strs.length < 1) { result = '' } else {
        for (let i = 0; i < strs.length; i++) {
            for (let j = 0; j < strs.length; j++) {
                sample.push(strs[j][i])
            }
            if (sample.every((el, i, strs) => el === strs[0])) {
                result += sample[0]
                sample = []

            }
        }
    }
    return console.log(result)
}

const plusOne = (digits) => {
    let num = (BigInt(digits.join('')) + 1n)
    return console.log(("" + num).split(""))
}

plusOne([1, 2, 3])

