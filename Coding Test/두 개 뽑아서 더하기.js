// 🕐 권장시간 : 5분 45초 / 30분 ✅

/** 💯 제약 조건
 - 배열 길이는 2 이상 1,000 이하입니다.
 - 각 배열의 데이터 값은 -100,000 이상 100,000 이하입니다.
 */

/* 🚥 입출력 예시
- 입력 : [2, 1, 3, 4, 1]       출력 : [2, 3, 4, 5, 6, 7]
- 입력 : [5, 0, 2, 7]         출력 : [2, 5, 7, 9, 12]
*/

// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서
// 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let result = [];
  // 1. i를 기준으로 돌면서 i+1만큼 돌면서 result 배열에 저장
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }
  // 2. 중복적인 요소들 제거
  let answers = [...new Set(result)];

  // 3. 오름차순
  return answers.sort((a, b) => a - b);
}

const answerA = solution([2, 1, 3, 4, 1]);
const answerB = solution([5, 0, 2, 7]);

console.log(answerA); // [2, 3, 4, 5, 6, 7]
console.log(answerB); // [2, 5, 7, 9, 12]

/** 🔆 해설
 * 1. i를 기준으로 돌면서 i+1만큼 돌면서 result 배열에 저장
 * 2. 중복적인 요소들 제거
 * 3. 오름차순
 */
