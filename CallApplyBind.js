const obj = {
    first: 'ajay',
    last: 'kumar',
    print: function () {
        return this.first
    }
}

const obj2 = {
    first: 'vijay',
}

// CALL
// function borrowing
// Using a function from object 'A' with the values of object 'B'
// we can pass the 'this' reference and other arguments that a function needs
// syntax: objextA.objectAfunction.call(object that 'this' keyword in functionA we want to denote)
console.log("CALL: ", obj.print.call(obj2))

const printName = function (city, age) {
    return this.first + city + age
}

console.log("CALL: ", printName.call(obj2, 'Chennai', 25))

// APPLY 
// we can pass the 'this' reference and other arguments that a function needs as an array
console.log("APPLY: ", printName.apply(obj2, ['Chennai', 25]))

// BIND
// same as CALL but result can be put inside a const to be called as a function later
// gives us a copy that can be invoked later
const res = printName.bind(obj, 'chennai', 25)
console.log("BIND: ", res())