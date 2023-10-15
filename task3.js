//Task3
const arr3 = [1, 6, 5, 5, 7, 2, 4, 3, 2, 6]
let biggest = 0
let sum = 0
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > biggest) {
    biggest = arr3[i]
  }
}

for (let i = 1; i < arr3.length; i++) {
  if (arr3[i] == biggest) {
    break
  }
  sum += arr3[i]
}

console.log(sum)

/*---2-ci usul indexOf---*/
// const arr3 = [1, 5, 3, 2, 7, 2, 4, 3, 2, 6]
// let bigest = 0
// let sum = 0
// for (let i = 0; i < arr3.length; i++) {
//   if (arr3[i] > bigest) {
//     bigest = arr3[i]
//   }
// }

// for (let i = 1; i < arr3.indexOf(bigest); i++) { //indexOf metodunu arasdırdım elementin id-sini tapır en boyuk elementin id-sini tapdim ve dovr o id-ye kimi davam edib sum-i hesablayır
//   sum += arr3[i]
// }

// console.log(sum);
