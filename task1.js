//Task 1
const arr = [1, 4, 6, 7, 9]
let biggest = 0
let smallest = 9
let sum = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > biggest) {
    biggest = arr[i]
  }
  if (arr[i] < smallest) {
    smallest = arr[i]
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== biggest && arr[i] !== smallest) {
    sum += arr[i]
  }
}

console.log(sum)
