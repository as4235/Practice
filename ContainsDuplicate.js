const fun = (arr) => {
    let result = ''
    const filter = arr.filter((el, index, arr) => arr.indexOf(el) === index)
    result = filter.length === arr.length ? false : true
    return result
}
console.log(fun([1, 2, 1]))