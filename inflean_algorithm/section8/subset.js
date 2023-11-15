function solution(n) {
  const answer = [];
  const ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v > n) {
      let tmp = '';
      for (let i = 1; i < v; i++) {
        if (ch[i] !== 0) tmp += i;
      }
      answer.push(tmp);
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
