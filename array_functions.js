//push: to insert an element to the last
push = [1, 2, 3, 4, 5]
push.push(7)
console.log("push:", push)

//pop: deletes last element in an array
pop = [1, 2, 3, 4, 5, 6]
pop.pop()
console.log("pop:", pop)

//shift: deletes first elment
shift = [1, 2, 3, 4, 5, 6]
shift.shift()
console.log("shift:", shift)

//unshift: inserts elment to arr[0]
unshift = [1, 2, 3, 4, 5]
unshift.unshift(0)
console.log("unshift:", unshift)

//splice: arr.splice(index, no_of_el_to_del, el_to_insert_in_the_gap)
splice1 = [1, 'a', 'b', 4, 5]
splice1.splice(1, 2)
console.log("splice:", splice1)

// or
splice2 = [1, 'a', 'b', 4, 5]
splice2.splice(1, 2, 2, 3)
console.log("splice:", splice2)

// slice: extracts copy of elements, does not mutate the array. arr.slice(index_starting, index_ending_excluded)
slice = ['a', 'b', 1, 2, 3, 'c']
const arr = slice.slice(2, 5)
console.log("slice:", arr)

// forEach: same as map function but not chainable
foreach = [1, 2, 3]
let sum = 0;
foreach.forEach(item => sum += item)
console.log('forEach sum:', sum)

// filter:
const filter = ['a', 'b', 'a', 'c'];
console.log("filter:", filter.filter((item, index, arr) => arr.indexOf(item) === index))

// reduce:
reduce = [1, 2, 3]
console.log("reduce:", reduce.reduce((sum, current) => sum += current))
const store = [{ value: 10 }, { value: 10 }, { value: 10 }]

// array.reduce((sum, item, index, arr) => {math}, initial_value_of_sum )
console.log(store.reduce((sum, item) => sum += item.value, 0))

// sort:
const sort = [1, 4, 8, 2, 5, 9]
// const sorting = (a = arr[i], b = arr[i + 1]) => {
//     if (a - b < 0){
//         a goes first
//     } else if (a > b = 0) {
//         b goes first
//     } else {
//         nothing
//     }
// }
console.log("sort:", sort.sort((a, b) => a - b))

//fill: modify and returns the modified array
const fill = [1, 2, 3, 4, 5]
// array.fill(no_to_be_filled, initial_index, last_index_not_included)
console.log("fill:", fill)

//includes: will return true/false. array.find('a') will return the value itself
console.log("includes:", [1, 2, 3, 4, 5].includes(1))

//join
console.log("join:", ['a', 'b', 'c', 'd'].join(''));

//every: even one falsey value will return false as result
const every = [1, 2, 3, 4, 5]
console.log("every:", every.every((element, arr) => element > 1))

//some: one true will return true
console.log("some:", [1, 2, 3, 4, 5].some(el => el > 4))


