// 만약 두 칸만 건너는게 아니라 세칸을 건너면 n-3 n-2 n-1이케 세 번 계산 해야됨
function solution(n) {
  const dy = [1, 2];
  for (let i = 2; i <= n; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  return dy[n];
}

console.log(solution(7));
