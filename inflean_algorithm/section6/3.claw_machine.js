/** 크레인 인형 뽑기 (프로그래머스)
 * https://school.programmers.co.kr/learn/courses/30/lessons/64061
 *
 * 사라진 인형의 개수
 */
function solution(board, moves) {
  let stack = []
  let cnt = 0
  for (let j = 0; j < moves.length; j++) {
    for (let i = 0; i < board.length; i++) {
      let num = moves[j] - 1

      if (board[i][num] === 0) {
        continue
      }
      if (board[i][num] !== 0 && board[i][num] !== undefined) {
        if (board[i][num] === stack.at(-1)) {
          stack.pop()
          cnt += 2
        } else {
          stack.push(board[i][num])
        }
        board[i][num] = 0
        break
      }
    }
  }
  return cnt
}

/**
function solution(board, moves) {
    같은 인형 두개는 터져서 둘다 없어짐
    인형이 안집어질 경우는 없지만 인형이 없는 자리에선 작동안함
    바구니는 모든 인형이 들어갈 만큼 큼
    보드는 2차원 배열 5이왕 30이하
    0은 빈캄 1~100까지 다른 인형
    moves는 1이상 배열의 가로 이하 자연수
    
    [
        [0,0,0,0,0],
        [0,0,1,0,3],
        [0,2,5,0,1],
        [4,2,4,4,2],
        [3,5,1,3,1]
    ]
    let answer = 0;
    let draw = [];
    for (let i = 0; i < moves.length; i++) {
      for (let j = 0; j < board.length; j++) {
        let now = moves[i]-1;
        if (board[j][now] === 0) continue
      
        if (board[j][now] === draw[draw.length-1]){
          answer += 2;
          draw.pop();
        } else {
          draw.push(board[j][now]);
        }
        board[j][now] = 0
        break
      }
  }
  return answer;
  }
 */
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
) // 4
