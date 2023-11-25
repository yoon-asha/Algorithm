function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let count = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  count[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return count[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        count[nx] = count[x] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));
