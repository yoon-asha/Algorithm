/* 숫자 문자열과 영단어
문제 설명
다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ s의 길이 ≤ 50
s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.


입출력 예
s	result
"one4seveneight"	1478
"23four5six7"	234567
"2three45sixseven"	234567
"123"	123
*/

function solution(s) {
    let answer = s
    /* zero~nine 까지를 배열에 저장
    숫자를 기준으로 문자열을 잘라준다 > 자른 단어가 위 배열하고 일치하면 index 반환해서 출력
    문자열 잘리는게 없다면 그대로
    */
    let numbers = ['zero','one','two','three','four','five','six','seven','eight','nine']
    for(let i = 0; i<numbers.length; i++) {
        let newArr = answer.split(numbers[i])
        answer = newArr.join(i)
    }
    return Number(answer);
}