function solution(w, n, arr) {
  let answer = 0;
  function DFS(L, sum) {
    if (L === n) {
      if (sum < w && answer < sum) {
        answer = sum;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(259, 5, [81, 58, 42, 33, 61]));
