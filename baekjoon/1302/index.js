const [n, ...books] = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')

if (n === 1) console.log(books[0])
let obj = {}
books.forEach((book) => {
  if (obj[book]) obj[book]++
  else obj[book] = 1
})
let answer = Object.entries(obj).sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] > b[0] ? 1 : -1
  }
  return b[1] > a[1] ? 1 : -1
})

console.log(answer[0][0])

/*
예제와 답
5
top
top
top
top
kimtop
>> top

9
table
chair
table
table
lamp
door
lamp
table
chair
>> table

6
a
a
a
b
b
b
>> a

8
icecream
peanuts
peanuts
chocolate
candy
chocolate
icecream
apple
>> chocolate

1
soul
>> soul
*/
