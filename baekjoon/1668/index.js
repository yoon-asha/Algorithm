/*

> 1
5
1
2
3
4
5
// 5
// 1

> 2
4
5
5
5
5
// 1
// 1

> 3
5
1
2
5
2
1
// 3
// 3

> 4
7
1
4
2
5
3
7
1
// 4
// 2

입력 첫째 줄은 총 트로피 개수,
둘째 줄부터 트로피의 높이들,

출력 첫째 줄은 왼쪽에서 보이는 트로피 개수,
둘째 줄은 오른쪽에서 보이는 트로피 개수
 */

const [n, ...trophy] = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(Number)

let leftMax = trophy[0]
let leftCnt = 1
let rightMax = trophy.at(-1)
let rightCnt = 1

for (let i = 0; i < n; i++) {
  if (leftMax < trophy[i]) {
    leftMax = trophy[i]
    leftCnt++
  }
  if (rightMax < trophy.at(-i)) {
    rightMax = trophy.at(-i)
    rightCnt++
  }
}
console.log(leftCnt)
console.log(rightCnt)
