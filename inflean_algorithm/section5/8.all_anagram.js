/**
모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

 S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

▣ 입력예제 1 
bacaAacba 
abc

▣ 출력예제 1 
3

출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
 */

function compare(map1, map2) {
  if (map1.size !== map2.size) return false
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false
  }
  return true
}

function solution(s, t) {
  let answer = 0
  let tH = new Map()
  let sH = new Map()

  for (let x of t) {
    tH.set(x, (tH.get(x) || 0) + 1)
  }
  let len = t.length - 1
  for (let i = 0; i < len; i++) {
    sH.set(s[i], (sH.get(s[i]) || 0) + 1)
  }

  let lt = 0
  for (let rt = len; rt < s.length; rt++) {
    sH.set(s[rt], (sH.get(s[rt]) || 0) + 1)
    // 같은지 확인, 같으면 answer++
    if (compare(sH, tH)) answer++
    // 슬라이딩 윈도우, lt를 하나씩 빼줌
    sH.set(s[lt], sH.get(s[lt]) - 1)
    // 만약 lt가 0이면 아예 삭제해줌
    if (sH.get(s[lt]) === 0) sH.delete(s[lt])
    // 그리고 옆으로 윈도우 이동
    lt++
  }

  return answer
}

console.log(solution('bacaAacba', 'abc'))
