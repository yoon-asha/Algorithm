// i 금액을 거슬러 주려고 사용된 최소동전개수

function solution(n, coin, m) {
  let dy = Array.from({ length: m + 1 }, () => 10000);
  dy[0] = 0;
  for (let i = 1; i < n; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  console.log(dy);
  return dy[m];
}

console.log(solution(3, [1, 2, 5], 15)); //3
