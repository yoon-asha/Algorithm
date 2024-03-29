/** 회문 문자열
 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
단 회문을 검사할 때 대소문자를 구분하지 않습니다.

▣ 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

▣ 출력설명
첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.

▣ 입력예제 1 
gooG

▣ 출력예제 1 
YES

 */

const solution = (str) => {
    // let reverse = [str.toLowerCase()].reverse().join()
    let reverse = [...str.toLowerCase()].reverse().join('')
    if (str.toLowerCase() === reverse) return 'YES'
    else return 'NO'
  }

// reverse 안쓰고 푸는 방법
  const solution = (str) => {
    let reverse = []
    for(let i = 0; i<str.length;i++) {
      reverse.push(str[str.length-1-i].toLowerCase())
      // console.log(reverse)
    }
      if(reverse.join('') === str.toLowerCase()) return 'YES'
      else return 'NO'
  }
  
// 선생님 답
  function solution(s){
    let answer="YES";
    s=s.toLowerCase();
    let len=s.length;
    for(let i=0; i<Math.floor(len/2); i++){
        if(s[i]!=s[len-i-1]) return "NO";
    }
    return answer;
}
// reverse 사용안하고 직접 하라고 하면 이렇게 하면 됨!

  console.log(solution('gooG'))
  console.log(solution('goot'))