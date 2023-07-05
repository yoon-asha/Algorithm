function solution(today, terms, privacies) {
  var answer = []

  const termsMap = new Map()

  for (let x of terms) {
    const [type, m] = x.split(' ')
    termsMap.set(type, m)
  }

  for (let i = 0; i < privacies.length; i++) {
    let [date, type] = privacies[i].split(' ')

    if (calculate(date, +termsMap.get(type)) < today.split('.').join('')) {
      answer.push(i + 1)
    }
  }

  return answer
}

function calculate(date, num) {
  let [y, m, d] = date.split('.').map(Number)

  m += num
  d--

  if (m > 12) {
    y += parseInt(m / 12)
    m = m % 12
  }
  if (m === 0) {
    y--
    m = 12
  }
  if (d === 0) {
    m--
    d = 28
  }

  return '' + y + (m < 10 ? '0' + m : m) + (d < 10 ? '0' + d : d)
}

// console.log(solution('2022.05.19', ['A 6', 'B 12', 'C 3'], ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'])) // 1,3
// console.log(solution('2020.01.01', ['Z 3', 'D 5'], ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z'])) // 1,4,5

console.log(solution('2020.01.01', ['A 1'], ['2019.12.01 A'])) // [1]
console.log(solution('2020.01.01', ['A 1'], ['2019.12.09 A', '2019.12.09 A', '2019.12.09 A', '2019.12.09 A', '2019.12.09 A', '2019.12.09 A', '2019.12.09 A', '2019.12.09 A', '2019.12.09 A', '2019.12.09 A', '2019.12.01 A'])) // [11]
console.log(solution('2020.05.17', ['A 3', 'B 12'], ['2020.01.01 A', '2020.05.17 B'])) // [1]
console.log(solution('2021.01.28', ['A 2'], ['2020.12.01 A', '2010.01.01 A'])) // 2

console.log(solution('2020.12.17', ['A 12'], ['2010.01.01 A', '2019.12.17 A'])) // 1,2

// console.log(solution('2021.12.14', ['A 12'], ['2020.12.16 A'])) // [1]
