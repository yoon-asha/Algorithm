let num = 6
let board = []

for (let i = 0; i <= num - 1; i++) {
  board.push({ current: i, next: i + 1 })
  board.push({ current: num, next: 1 })
}

console.log(board)
