/**
 * 길이가 서로 다른 a, b, c 세개의 막대 길이가 주어진다
 * 이 세 막대로 삼각형을 만들 수 있으면 'Yes' 만들 수 없으면 'No'를 출력한다.
 */


// 삼각형의 조건
// 세 변의 길이가 같을 때
// 가장 긴 변의 길이가 다른 두 변의 합보다 크거나 같지 않다 > 작아야 한다.


// 내 답
function solution(a, b, c) {
  let max = 0
  const total = a + b + c
  
  if (a > b && a > c) max = a
  if (b > c && b > a) max = b
  if (c > a && c > b) max = c

  if (total - max <= max) return 'No'
  else return 'Yes'
}

// 선생님 답
function solution(a, b, c) {
  let answer = "YES",
    max;
  let tot = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (tot - max <= max) answer = "NO";
  return answer;
}

console.log('1= ' + solution(6, 5, 11)) // 긴 변의 길이가 두 변의 합과 같음
console.log('2= ' + solution(5, 4, 8)) // 긴 변의 길이가 두 변의 합보다 작음
console.log('3= ' + solution(7, 7, 7)) // 세 변이 모두 같음
console.log('4= ' + solution(2, 6, 12)) // 긴 변의 길이가 두 변의 합보다 큼