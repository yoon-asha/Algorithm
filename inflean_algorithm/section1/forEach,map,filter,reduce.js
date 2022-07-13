/**
 * forEach, map, filter, reduce
 * 모두 고차함수 (함수를 인자로 받을 수 있는 함수)
 */

a = [10, 11, 12, 13, 14, 15, 16]

// forEach란? for 대신 사용, 아마 이렇게 돌아갈 듯!
function forEach(predicate, thisArg) {
  for (let i = 0; i < a.length; i++) {
    predicate(a[i], i)
  }
}

let forEach_result = a.forEach((v, i) => { // 인자로 넘어가는 매개변수로 넘어가는 함수가 콜백함수
  console.log(v, i, this) // 여기는 forEach의 내부가 아니라 콜백함수의 내부
}, [1, 2]);

console.log(forEach_result)


// map이란? 아마 이렇지 않을까.. 새로운 배열을 리턴하지만 길이는 원본과 같다!
function map(predicate, thisArg) {
  let list = []
  for (let i = 0; i < a.length; i++) {
    list.push(predicate(a[i], i))
  }
  return list
}

let map_result = a.map((v, i) => {
  return v * v
  // [100, 121, 144, 169, 196, 225, 256]
})

// 만약 짝수를 리턴하고 싶다면
let map_result2 = a.map((v, i) => {
  if (v % 2 === 0) return v
  // 어떻게 리턴될까요? 짝수만 리턴될까요?
  // map은 무조건 원본 배열과 같은 길이를 리턴합니다.
  // [10, undefined, 12, undefined, 14, undefined, 16]
})

console.log(map_result)
console.log(map_result2)


// filter란? 원하는 요소만 남기고 리턴해주는 메소드 / 길이가 다를 수 있다! / 원리는 아마도..
function filter(predicate, thisArg) {
  let list = []
  for (let i = 0; i < a.length; i++) {
    if (predicate(a[i], i)) list.push(a[i])
  }
  return list
}

let filter_result = a.filter((v, i) => {
  return v % 2 === 1
})

console.log(filter_result)


// reduce란? 첫번째 인자는 콜백함수, 두번째는 초기화값
function reduce(predicate, val) {
  let reduce_res = val

  for (let i = 0; i < a.length; i++) {
    reduce_res = predicate(reduce_res, a[i])
    // predicate가 호출하면 아래의 return acc + v가 실행되고 reduce_res가 acc + v 값이 됨!
    // 그게 또 predicate의 인자로 들어가고 또 호출해서 누적된 acc 에 v가 또 더해지고 반복
  }

  return reduce_res
}
// reduce_res가 acc에 들어가고 a[i]가 v로 넘어감

let reduce_result = a.reduce((acc, v) => { // 콜백함수의 첫번째 인자는 누적, 두번째가 value
  return acc + v // 이렇게하면 a의 모든 값을 다 더한 값이 리턴
  // return acc+v가 다시 acc로 들어간다! 그게 또 acc+v가 되고 그 값이 또 acc로 넘어가고 반복
})

console.log(reduce_result)