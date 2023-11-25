/** 경로탐색 인접리스트
 */
function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  for (let [x, y] of arr) {
    graph[x].push(y);
  }
  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let nv of graph[v]) {
        if (ch[nv] === 0) {
          ch[nv] = 1;
          DFS(nv);
          ch[nv] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
