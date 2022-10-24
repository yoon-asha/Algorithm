// const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const file = process.platform === './input.txt';

// console.log("input >> ", input);

// for문을 돈다
// arr[i][0] 즉 문서의 개수가 1일 때는 바로 1을 리턴한다
// 1이 아닐 경우 arr[i][1]을 num에 저장하고 두번째 줄의 length만큼(document) for문을 또 돈다
// document[num]을 newNum에 저장하고
// document에서 순서대로 max 넘버를 빼면서 count를 한다
// max 넘버가 newNum과 같으면 count를 answer에 push 한다
// 이 때 넘버가 동일하면 document[j+1]하면서 하나씩 빼다가 끝까지 오면 document[0]부터 다시 뺀다
// 결국 num도 계속 저장해서 document[j]가 num일 때까지 count 해서 j===num 일 때 j를 answer에 push 해야 된다

// const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const file = process.platform === './input.txt';
// /dev/stdin
let [n, ...arr] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")

// 지금 arr는 '1 0' 이런 상태이므로, 1, 0 이렇게 잘라주고 넘버로 바꿔준다.
arr = arr.map((el) => el.split(" ").map(Number))

let answer = ""

for (let i = 0; i < arr.length; i += 2) {
  // 왼쪽 - 문서의 개수 /오른쪽 - 알고싶은 문서 위치
  // 둘째 줄 - 이 인덱스의 문서의 인쇄 순서 출력
  solution(arr[i][0], arr[i][1], arr[i + 1])
}

function solution(num, idx, doc) {
  // 인쇄 순서 카운트
  let cnt = 0
  while (true) {
    // max에 doc 중에 제일 큰 수를 넣는다
    const max = Math.max(...doc)
    // doc에서 하나씩 빼서 number로 넣는다.
    let number = doc.shift()
    console.log("num>> ", number, "  doc>> ", doc)
    // number가 max면
    if (number === max) {
      // 카운트 +1
      cnt++
      // 근데 idx가 0 이면(궁금한 수가 맨 앞에 오면
      if (idx === 0) {
        // 정답은 cnt하고 한 줄 띄기!
        answer += cnt + "\n"
        break
        // 정답을 찾았으니 빠져나오기
      }
    } else {
      // number가 max가 아니면 doc의 맨 끝으로 number를 보내준다!
      doc.push(number)
    }

    // 위 과정을 거치고 나면 프린터의 위치가 하나씩 당겨지므로 idx가 0이면 마지막으로, 0이 아니었으면 하나 당겨준다.
    if (idx === 0) {
      idx = doc.length - 1
    } else {
      idx--
    }
  }
}
console.log(answer)
