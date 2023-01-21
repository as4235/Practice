const one = (two) => {
    return setTimeout(() => { console.log('one'); two() }, 200)
}

const two = () => {
    return setTimeout(() => {
        console.log('two')
    }, 100);
}

one(two)