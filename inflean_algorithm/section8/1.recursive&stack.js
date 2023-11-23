function solution(n) {
  let answer = '';
  function recursive(num) {
    if (num <= n) {
      answer += num + ' ';
      recursive(num + 1);
    } else return;
  }
  recursive(1);
  return answer.trim();
}

console.log(solution(3));

function solution(n) {
  function DFS(L) {
    if (L == 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}
