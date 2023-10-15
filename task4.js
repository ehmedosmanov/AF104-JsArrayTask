//Task 4
const arr4 = [123, 7, 53, 99]
let biggest = 0
let smallest = 9
let edediOrta = 0

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > biggest) {
    biggest = arr4[i]
  }
  if (arr4[i] < smallest) {
    smallest = arr4[i]
  }
}
edediOrta = (smallest + biggest) / 2

console.log(edediOrta)
