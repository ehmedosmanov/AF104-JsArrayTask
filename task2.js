//Task 2
let num = 2
const arr2 = [2, 2, 2, 4, 3, 1, 5, 6, 9, 3, 2, 52, 3, 2]

let arrayFilter = arr2.filter(e => e === num)

console.log(`${arrayFilter.length} tekrar`)

/*----2 ci üsul----*/
//birinci filter aglima geldi filter-ile yazdim sonra filtersiz yazmaga calisdim
// const arr2 = [2, 2, 2, 4, 3, 1, 5, 6, 9, 3, 2, 52, 3, 2]
// let num = 2;
// let repeat = 0

// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] === num) {
//// hər element yoxlanılır bizə lazım olan rəqəm tapılanda repeat 1 vahid artırır (Increment)
//     repeat++
//   }
// }
// console.log(`${repeat} tekrar`)
