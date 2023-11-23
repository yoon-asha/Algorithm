function solution(n, arr) {
  let answer = 'NO';
  const total = arr.reduce((acc, cur) => acc + cur, 0);
  let flag = 0;
  function DFS(L, sum) {
    console.log(L, sum);
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(6, [1, 3, 5, 6, 7, 10]));
