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
function solution(n, arr){
  let sum = {}
 for(let i = 0; i<arr.length; i++) {
//    sum.push(arr[i].toString().split('').reduce((a,b)=> Number(a)+Number(b)))

//    sum.sort((a,b) => b-a)
   
  console.log(arr[i])
   sum[arr[i]]=arr[i].toString().split('').reduce((a,b)=> Number(a)+Number(b))
/*
sum 배열에 arr[i]의 합을 넣는다 > 
큰 순서로 정리한다 > 
이걸 arr랑 일치시켜서 첫번째거를 return

그럼 오브젝트로 하면? 키와 값으로 해서 하면 될지도
키에 arr[i] value에 reduce한 값

*/
 }  
  console.log(Object.entries(sum))

  

}


function solution(n, arr){
  let answer, max=Number.MIN_SAFE_INTEGER;
  for(let x of arr){
      let sum=0, tmp=x;
      while(tmp){
          sum+=(tmp%10);
          tmp=Math.floor(tmp/10);
      }
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
console.log(solution(7, arr));