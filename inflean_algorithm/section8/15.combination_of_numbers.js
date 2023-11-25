function solution(n, k, arr, m) {
  let answer = 0;
  // let tmp = [];
  function DFS(L, s, sum) {
    if (L === k) {
      // console.log(tmp);
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        // tmp[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

console.log(solution(5, 3, [2, 4, 5, 8, 12], 6)); // 2
