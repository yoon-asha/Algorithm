/** 추억 점수
 * https://school.programmers.co.kr/learn/courses/30/lessons/176963
 */

function solution(name, yearning, photo) {
  var answer = []

  let newMap = new Map()
  for (let i = 0; i < name.length; i++) {
    newMap.set(name[i], yearning[i])
  }

  for (let i = 0; i < photo.length; i++) {
    let sum = 0
    for (let j = 0; j < photo[i].length; j++) {
      if (newMap.get(photo[i][j]) !== undefined) sum += newMap.get(photo[i][j])
    }
    answer.push(sum)
  }

  return answer
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
) // [19, 15, 6]

console.log(
  solution(
    ['kali', 'mari', 'don'],
    [11, 1, 55],
    [
      ['kali', 'mari', 'don'],
      ['pony', 'tom', 'teddy'],
      ['con', 'mona', 'don'],
    ]
  )
) // [67, 0, 55]

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']]
  )
) // [5, 15, 0]
