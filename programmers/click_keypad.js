function solution(numbers, hand) {
    var answer = '';
    
    const keypad = [
        [1,1],[1,2],[1,3],
        [2,1],[2,2],[2,3],
        [3,1],[3,2],[3,3],
        [4,1],[4,2],[4,3]
    ]
    
    let nowLeft = [4, 1]
    let nowRight = [4, 3]

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 1) {
            answer += 'L'
            nowLeft = keypad[numbers[i] - 1]
        }
        if (numbers[i] !== 0 && numbers[i] % 3 === 0) {
            answer += 'R'
            nowRight = keypad[numbers[i] - 1]
        }
    }
// 푸는 중 우선 동기화 부터
    return answer;
    }

    console.log(solution([1, 2, 3, 4, 5], "left"));
    console.log(solution([1, 3, 2, 4, 2], "right"));
