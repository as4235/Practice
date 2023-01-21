// 1
// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
// })
// p.catch(error => console.log(error.message))
// p.catch(error => console.log(error.message))

// // 2
// var p = new Promise((resolve, reject) => {
//     return Promise.reject(Error('The Fails!'))
// })
// p.catch(error => console.log(error.message))
// p.catch(error => console.log(error.message))

// // 3
// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
// })
//     .catch(error => console.log(error))
//     .then(error => console.log(error))

// // 4
// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
// })
//     .catch(error => console.log(error.message))
//     .catch(error => console.log(error.message))

// // 5 confusing
// new Promise((resolve, reject) => {
//     resolve('Success!')
// })
//     .then(() => {
//         throw Error('Oh noes!')
//     })
//     .catch(error => {
//         return "actually, that worked"
//     })
//     .catch(error => console.log(error.message))

// // 6
// Promise.resolve('Success!')
//     .then(data => {
//         return data.toUpperCase()
//     })
//     .then(data => {
//         console.log(data)
//     })

// // 7
// Promise.resolve('Success!')
//     .then(data => {
//         return data.toUpperCase()
//     })
//     .then(data => {
//         console.log(data)
//         return data
//     })
//     .then(console.log)

// // 8
// Promise.resolve('Success!')
//     .then(data => {
//         data.toUpperCase()
//     })
//     .then(data => {
//         console.log(data)
//     })

// // 9
// Promise.resolve('Success!')
//     .then(() => {
//         throw Error('Oh noes!')
//     })
//     .catch(error => {
//         return 'actually, that worked'
//     })
//     .then(data => {
//         throw Error('The fails!')
//     })
//     .catch(error => console.log(error.message))

// 10
// const p = new Promise((res, rej) => {
//     res(2)
// }).then(v => { return console.log(v + 2) }).finally(v => console.log('FINALLY wont take up value'))

// 11
// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// }).then(() => console.log('a'))
// console.log('end');

// 12
// console.log('start');
// const promise1 = Promise.resolve().then(() => {
//     console.log('promise1');
//     const timer2 = setTimeout(() => {
//         console.log('timer2')
//     }, 0)
// });

// const timer1 = setTimeout(() => {
//     console.log('timer1')
//     const promise2 = Promise.resolve().then(() => {
//         console.log('promise2')
//     })
// }, 0)
// console.log('end');

// 13
// console.log('start');
// const promise11 = Promise.resolve().then(() => {
//     console.log('promise1');
//     const timer2 = setTimeout(() => {
//         console.log('timer2')
//     }, 0)
// });
// const timer11 = setTimeout(() => {
//     console.log('timer1')
//     const timer2 = setTimeout(() => {
//         console.log('timer22')
//     }, 0)
// }, 0)
// console.log('end');