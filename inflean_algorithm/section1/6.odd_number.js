/**
 * 7개의 자연수가 주어질 때, 이 중 홀수인 자연수들을 모두 골라서
 * 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
 * ex 1,2,3,4,5,6,7 이면 1,3,5,7의 합 16과 최소값 1 리턴
 */

// 내 답
function solution(arr) {
  let oddArr = []
  let answer = 0

  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) oddArr.push(arr[i])
  }
  for (let i = 0; i < oddArr.length; i++) {
    answer = answer + oddArr[i]
  }
  return [answer, oddArr[0]]
}

// 내 답2
function solution(arr) {
  let answer = 0
  let minNum = 1000

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      answer += arr[i]
      if (arr[i] < minNum) minNum = arr[i]
    }
  }
  return [answer, minNum]
}

// 선생님 답
function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

console.log('1= ' + solution([5, 2, 3, 1, 7, 8, 9]))
console.log('2= ' + solution([70, 34, 52, 67, 89, 11, 23]))
console.log('3= ' + solution([14, 100, 266, 35, 84, 51, 77]))
console.log('4= ' + solution([1, 2, 3, 4, 5, 6, 7]))