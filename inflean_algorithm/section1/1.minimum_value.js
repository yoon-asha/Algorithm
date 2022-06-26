/**
 * 100이하의 자연수 a, b, c를 입력받아 세 수 중
 * 가장 작은 값을 출력하는 프로그램을 작성하세요
 * 정렬 사용 금지
 */


// 내가 쓴 답
function solution(a, b, c) {
	let answer = ''

	if (b > a && c > a) answer = a
	if (a > b && c > b) answer = b
	if (a > c && b > c) answer = c

	return answer
}

// 선생님 답
function solution(a, b, c) {
	let answer;

	if (a < b) answer = a;
	else answer = b;
	if (c < answer) answer = c;
	
	return answer;
}

console.log('1= ' + solution(6, 5, 11))
console.log('2= ' + solution(2, 4, 71))
console.log('3= ' + solution(1, 8, 3))