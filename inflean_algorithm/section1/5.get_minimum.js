/**
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 */

// 내 답
function solution(arr) {
  arr.sort((a, b) => a - b)
  return arr[0]
}

// 선생님 답
function solution(arr) {
  let answer, min = Number.MAX_SAFE_INTEGER; // min=arr[0] 으로 해도 됨
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

// 다른 답
function solution(arr) {
  let answer = Math.min(...arr)
  // arr 넣으면 못 알아들음 ...arr로 넣으면 arr[0],arr[1] 이케 전개돼서 인자로 들어가는거
  // 최대값은 Math.max(...arr)
  return answer
}

console.log('1= ' + solution([5, 2, 3, 1, 7, 8, 9]))
console.log('2= ' + solution([70, 34, 52, 67, 89, 11, 23]))
console.log('3= ' + solution([14, 100, 266, 35, 84, 51, 77]))
console.log('4= ' + solution([1, 0, 2, 5, 3, 1, 0]))