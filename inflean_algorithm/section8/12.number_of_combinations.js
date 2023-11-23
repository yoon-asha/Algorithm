// 조합의 경우의 수 (메모이제이션)
// nCr 지금의 경우 5 컴비네이션 3
// 원래 공식 안쓰고 재귀를 이용해 조합수를 구하기
function solution(n, r) {
  let answer;
  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3)); // 10
console.log(solution(33, 19)); // 818809200
