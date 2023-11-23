/* 수열 추측하기
가장 윗줄에 1~n까지 숫자가 한 개씩, 둘째 줄부터
파스칼의 삼각형처럼 위의 두개를 더한 값 저장
3 1 2 4
 4 3 6
  7 9
  16
N과 가장 밑의 숫자가 주어졌을 때 가장 윗줄의 숫자를 구하기(답이 여러가지 일 경우 사전순으로 가장 앞에 오는 것 출력)

(n-1)C1 (n-1)C2 이런식으로 쭉 가고 이 값을 배열에 저장
1 2 3 4/ 1 2 4 3 이런식으로 쭉 가고 이 값을 배열에 저장
((n-1)C1)*1 이런식으로 쭉 계산해주는 것...
*/
function solution(n, f) {
  let answer;
  let flag = 0;
  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  //   let p = Array.from({ length: n }, () => 0);
  let p = [];
  let b = Array.from({ length: n }, () => 0);

  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  function DFS(L, sum) {
    if (flag) return;
    // if (L === n) console.log(p); // 만들어진 순열 확인 가능
    if (L === n && sum == f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          //           p.push(i) // push, pop으로도 할 수 있다.
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
          //           p.pop()
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  DFS(0, 0);
  return answer;
}
console.log(solution(4, 16)); // 3 1 2 4
