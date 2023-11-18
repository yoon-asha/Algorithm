/* 동전교환 Cut Edge Tech (DFS)
거슬러 줄 동전의 최소 개수 출력

n - 동전 개수
arr - 동전 종류
m - 거슬러 줄 금액
*/

function solution(n, arr, m) {
  let answer = m;
  function DFS(L, sum) {
    if (sum > m) return;
    if (L >= answer) return;
    if (sum === m) {
      answer = Math.min(L, answer);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(3, [1, 2, 5], 15));
