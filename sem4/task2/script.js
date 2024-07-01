// task 1

const arr = [1, 2, 3]
for (let index = 0; index < arr.length; index++) {
    arr[index]++
}

console.log(arr)


// task 2

const arrNew = []
arrNew[3] = 'a'
arrNew[8] = 'b'

console.log(arrNew.length)


// task 3

const arr2 = [1, 2, 3]
arr2.push(4, 5)
// arr2.push(5)
console.log(arr2)


// task 4

const arr3 = [1, 2, 3, 4, 5]
console.log(`Length of arr3 is equal: ${arr3.length}`)
// arr3.pop()
// arr3.pop()
arr3.splice(-2)
console.log(`Length of arr3 (${arr3}) is equal: ${arr3.length}`)

