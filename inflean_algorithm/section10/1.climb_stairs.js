function solution(n) {
  let dy = [1, 2];
  for (let i = 2; i < n; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  return dy[n - 1];
}

console.log(solution(7));
