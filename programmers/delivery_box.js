function solution(order) {
  var answer = 0
  let stack = []
  let start = 1
  while (start <= order.length) {
    stack.push(start++)
    while (stack.at(-1) == order[answer]) {
      stack.pop()
      answer++
      if (stack.length == 0) break
    }
  }

  return answer
}

function solution(order) {
  var answer = 0
  let stack = []
  let start = 1

  for (let i = 0; i < order.length; i++) {
    if (stack.at(-1) === order[i]) {
      stack.pop()
      answer++
      continue
    }
    while (start !== order[i]) {
      stack.push(start++)
      if (start > order.length) return answer
    }

    if (start === order[i]) {
      answer++
      start++
    }
  }
  return answer
}

// console.log(solution([4, 3, 1, 2, 5])) // 2
// console.log(solution([5, 4, 3, 2, 1])) // 5
console.log(solution([3, 2, 1, 4, 5])) // 5
