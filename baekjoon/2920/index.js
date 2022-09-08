const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(Number);

// // 이건 맞음
// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const solution = (arr) => {
  let a = [1,2,3,4,5,6,7,8]
  let b = [8,7,6,5,4,3,2,1]

  if(JSON.stringify(arr) === JSON.stringify(a)) return 'ascending'
  if(JSON.stringify(arr) === JSON.stringify(b)) return 'descending'
  else return 'mixed'
}

console.log(solution(input))

/**
 * input
1 2 3 4 5 6 7 8 - ascending
8 7 6 5 4 3 2 1 - descending
8 1 7 2 6 3 5 4 - mixed
*/


// 이건 틀림
// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ').filter(Number);

// const solution = (arr) => {
//   let a = [1,2,3,4,5,6,7,8]
//   let b = [8,7,6,5,4,3,2,1]

//   if(JSON.stringify(arr) === JSON.stringify(a)) return 'ascending'

//   if(JSON.stringify(arr) === JSON.stringify(b)) return 'descending'

//   else return 'mixed'
// }

// console.log(solution(input))