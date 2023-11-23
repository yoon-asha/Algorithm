function solution(m, ps, pt) {
  let answer = 0;
  function DFS(score, time, sum) {
    if (time > m) return;
    if (score === ps.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(score + 1, time + pt[score], sum + ps[score]);
      DFS(score + 1, time, sum);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
