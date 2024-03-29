function solution(ingredient) {
  let answer = 0
  const stack = []
  for (let x of ingredient) {
    /*
    stack.push(x)
    const length = stack.length
    */
    const length = stack.push(x)
    if (length >= 4) {
      if (
        stack[length - 4] === 1 &&
        stack[length - 3] === 2 &&
        stack[length - 2] === 3 &&
        stack[length - 1] === 1
      ) {
        stack.pop()
        stack.pop()
        stack.pop()
        stack.pop()

        answer++
      }
    }
  }
  return answer
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])) // 2
// console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])) // 0
