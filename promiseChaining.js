const addB = (input) => {
    return input + 'b'
}

const addC = (input) => {
    return input + 'c'
}

const addD = (input) => {
    return input + 'd'
}

const validateFunction = () => {
    return false
}

const promise = () => {
    const pr = new Promise((resolve, reject) => {
        if (validateFunction()) {
            resolve('a')
        } else {
            reject(new Error("Invalid Value"))
        }
    })
    return pr
}

// promise()

promise().then(res => addB(res)).then(res => addC(res)).then(res => addD(res)).then(res => console.log(res)).catch(res => console.log("Error: ", res.message)).finally(() => console.log('done'))
