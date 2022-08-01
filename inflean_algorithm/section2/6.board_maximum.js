/* 격자판 최대합
5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.

▣ 출력설명 
최대합을 출력합니다.

▣ 입력예제 1
10 13 10 12 15 12 39 30 23 11 11 25 50 53 15 19 27 29 37 27 19 13 30 13 19

▣ 출력예제 1 
155

n x n의 보드!

가로 합, 세로 합, 두 대각선 합
이 네개중 가장 큰 합을 출력!

가장 쉬운 방법은 for 2번 돌려서
하는거 아닐까...?

sumX arr[0][j]의 합
sumY arr[i][0]의 합

이 대각선 두 개가 곤란쓰인데
diagonal_1 왼>오 arr[i][0++]
diagonal_2 오>왼 arr[i][n-1]

*/

const solution = (arr) => {
  let n = arr.length - 1;
  let sumX = 0, sumY = 0, diagonal_1 = 0, diagonal_2 = 0, answer = 0;

  for (let i = 0; i <= n; i++) {
    diagonal_1 += arr[i][i];
    diagonal_2 += arr[i][n - i];

    (sumX = 0), (sumY = 0);

    for (let j = 0; j < n; j++) {
      sumX += arr[i][j];
      sumY += arr[j][i];
    }
  }

  answer = Math.max(answer, diagonal_1, diagonal_2, sumX, sumY);
  return answer;
};


function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
