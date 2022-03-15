const powerSet = function (str) { // string이 들어오면
  let arr = str.split('').sort() // 다 나눠주고 정렬, arr로 반환
  let uniqArr = arr.filter((item, index) => arr.indexOf(item) === index) // 중복 방지?

  let subSets = [] // 저장해줄 빈 배열 생성
  function recursion(i, subSet) { 
    if(i === uniqArr.length){ // i가 uniqArr 길이만큼 다 돌면
      subSets.push(subSet) // subSets으로 push
      return
    }
    recursion(i + 1, subSet) // ...
    recursion(i + 1, subSet + uniqArr[i]) // ...
  }
  recursion(0, '') // 0은 빈거 넣어주는건가...

  return subSets.sort() // 마지막으로 정렬해서 리턴!
};

let output = powerSet('jjump');
console.log('1', output);
output = powerSet('bbaaac');
console.log('2', output)
