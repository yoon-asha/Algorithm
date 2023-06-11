function solution(wallpaper) {
  var answer = []

  let lux = Number.MAX_SAFE_INTEGER,
    luy = Number.MAX_SAFE_INTEGER,
    rdx = 0,
    rdy = 0

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        if (lux > i) lux = i
        if (luy > j) luy = j

        if (rdx < i) rdx = i
        if (rdy < j) rdy = j
      }
    }
  }
  return [lux, luy, rdx + 1, rdy + 1]
}

// 드래그의 시작점이 (lux, luy), 끝점이 (rdx, rdy)라면 정수 배열 [lux, luy, rdx, rdy]를 return
console.log(solution(['.#...', '..#..', '...#.'])) // [0, 1, 3, 4]
console.log(
  solution([
    '..........',
    '.....#....',
    '......##..',
    '...##.....',
    '....#.....',
  ])
) // [1, 3, 5, 8]
console.log(
  solution([
    '.##...##.',
    '#..#.#..#',
    '#...#...#',
    '.#.....#.',
    '..#...#..',
    '...#.#...',
    '....#....',
  ])
) // [0, 0, 7, 9]
console.log(solution(['..', '#.'])) // [1, 0, 2, 1]
