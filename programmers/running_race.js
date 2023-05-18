function solution(players, callings) {
  // 원래는 reduce로 Map을 생성했으나 그냥 객체가 더 빠름
  // let newMap = new Map()

  // for(let i = 0; i < players.length; i++) {
  //   newMap.set(players[i], i)
  // }

  let newObj = {}

  for (let i = 0; i < players.length; i++) {
    newObj[players[i]] = i
  }

  for (let j = 0; j < callings.length; j++) {
    let idx = newObj[callings[j]]
    let tmp = players[idx - 1]

    players[idx - 1] = callings[j]
    players[idx] = tmp

    newObj[callings[j]] = idx - 1
    newObj[tmp] = idx
  }
  return players
}

/** 요런방법도 있음
function solution(players, callings) {
    let idx;
    let name1;
    let name2;
    const idxList = {}

    players.forEach((name,index)=>idxList[name]=index)
    for(let call of callings){
        idx = idxList[call]
        name1 = players[idx]
        name2 = players[idx-1]
        idxList[call]-=1
        idxList[name2]+=1
        players[idx] = name2
        players[idx-1] = name1
    }    

    return players;
}
*/

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine']
  )
)
// ["mumu", "kai", "mine", "soe", "poe"]
