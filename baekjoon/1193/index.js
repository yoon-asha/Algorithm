let x = require("fs").readFileSync("./input.txt").toString()

/*
1/1 
1/2 2/1 
3/1 2/2 1/3 
1/4 2/3 3/2 4/1
5/1 4/2 3/3 2/4 1/5
1/6 2/5 3/4 4/3 5/2 6/1
7/1 6/2 5/3 4/4 3/5 2/6 1/7
1/8 2/7 3/6 4/5 5/4 6/3 3/7 8/1

x가 주어졌을 때 x번째 분수를 구하는 프로그램을 작성하시오.
*/

let cnt = 0

while (x > 0) {
  cnt++
  x -= cnt
}

if (cnt % 2 === 0) {
  console.log(`${cnt + x}/${1 + -x}`)
} else {
  console.log(`${1 + -x}/${cnt + x}`)
}

// 다른 방법

let line = 0
let maxValue = 0

//N의 범위의 최대값이 나올 때 까지
while (maxValue < x) {
  line++
  maxValue += line
}

let idx = x - (maxValue - line)

if (line % 2 == 0) {
  child = idx
  parents = line + 1 - child
} else {
  child = line + 1 - idx
  parents = line + 1 - child
}

console.log(child + "/" + parents)
