/** 자리수의 합
 * N개의 자연수가 입력되면 각 자연수의 자리수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요. 자리수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
 * 만약 235와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
 * 
 * 
▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 10,000,000를 넘지 않는다.

▣ 출력설명
자릿수의 합이 최대인 자연수를 출력한다.

▣ 입력예제 1
7
128 460 603 40 521 137 123

▣ 출력예제 1 
137
 */
// 다르게 풀어보고 싶어서 적어본 답...다른 말로... 객기..오기..?
function solution(arr) {
  let sum = {}
  let max = 0
  let answer = 0
  let newArr
  arr.sort((a,b)=>a-b)
  for (let i = 0; i < arr.length; i++) {
    sum[arr[i]] = arr[i].toString().split('').reduce((a, b) => Number(a) + Number(b))
    newArr = Object.entries(sum)
    max = Math.max(newArr[i][1], max)
    if(newArr[i][1] === max){
      answer = Math.max(newArr[i][0], answer)
    }
  } 
  return answer
}

// 선생님 답
function solution(arr){
  let answer, max=Number.MIN_SAFE_INTEGER;
  for(let x of arr){
      let sum=0, tmp=x;
      while(tmp){
          sum+=(tmp%10);
          tmp=Math.floor(tmp/10);
      }
    // 이것도 가능 sum[arr[i]] = arr[i].toString().split('').reduce((a, b) => a + Number(b),0)
      
      if(sum>max){
          max=sum;
          answer=x;
      }
      else if(sum===max){
          if(x>answer) answer=x;
      }
  }
  return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
console.log(solution([235,1234]));