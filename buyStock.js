var stock = function (arr) {
    let buyVal = 0
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[j], arr[j + 1])
        if (arr[j] < arr[j + 1] || arr[j + 1] === undefined) {
            buyVal = arr[j]
            j = arr.length
        }
    } console.log("current buyVal", buyVal)
    let buyDate = arr.indexOf(buyVal)
    let sellDate = buyDate;
    let sellVal = [];
    sellVal.push(buyVal)
    let profit = 0;
    for (let i = buyDate; i < arr.length; i++) {
        if (sellVal[sellVal.length - 1] >= buyVal && arr[i] >= sellVal[sellVal.length - 1]) {
            sellVal.push(arr[i])
            sellDate = i
            profit = sellVal[sellVal.length - 1] - buyVal
        }
    }
    return profit
};
console.log(stock([7, 6, 4, 3, 1]))
