function solution(users, emoticons) {
  /*
  1. 서비스 가입자 최대한 늘리기
  2. 판매액 최대 늘리기
  10%, 20%, 30%, 40%

  user는 discount 이상 무조건 삼
  limit 넘으면 가입
  
  emotions를 돌면서 할인율 적용한 가격 한 번에 더한값 리턴하는 함수

  user에다가 함수리턴 값 더해서 계산?

이모티콘 할인률 별로 arr만들어서 값을 구함
그 배열로 
  */
  var answer = [] // [플러스가입자, 이모티콘 판매가]

  // for (let i = 0; i < emoticons.length; i++) {
  //   for (let j = 0; j < users.length; j++) {
  //     let [discount, limit] = users[j]

  //     emoticons[i]
  //   }
  // }

  return answer
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
) // 1, 5400
// console.log(solution([[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200], [32, 6900]],	[1300, 1500, 1600, 4900])); // 4, 13860
