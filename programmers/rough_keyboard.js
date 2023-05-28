function solution(keymap, targets) {
  let answer = new Array(targets.length).fill(0)
  let map = new Map()
  keymap.forEach((e) => {
    e.split('').forEach((v, i) => {
      if (map.get(v) === undefined) map.set(v, i + 1)
      if (map.get(v) > i + 1) map.set(v, i + 1)
    })
  })

  console.log(map)

  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      if (map.get(targets[i][j]) === undefined) {
        answer[i] = -1
        break
      }
      if (map.get(targets[i][j]) !== undefined)
        answer[i] += map.get(targets[i][j])
    }
  }

  return answer
}

/** 어떻게 풀어야 할까
1. keymap을 map으로 만들어서
map에서 key를 인덱스+1 value를 ABCD등으로 

2. targets에서 하나씩 돌면서
keymap.has로 안나오면 -1
나오면 찾아서 번호 비교, 작은 숫자 answer에 +


*/

// console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB'])) // [9, 4]
// console.log(solution(['AA'], ['B'])) // [-1]
// console.log(solution(['AGZ', 'BSSS'], ['ASA', 'BGZ'])) // [4, 6]
// console.log(solution(['FFF', 'FFF'], ['CCC', 'CCC'])) // [-1, -1]
// console.log(solution(['AGZ', 'BSSS'], ['AGY', 'BSSS'])) // [-1, 7]
console.log(solution(['FFF', 'FFF'], ['CFF', 'CCC'])) // [-1, -1]
