// 🕐 권장시간 : 23분 / 30분 ✅

/** 💯 제약 조건
 - 시험은 최대 10,000 문제로 구성되어있습니다.
 - 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
 - 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
 */

/* 🚥 입출력 예시
- 입력 : [1,2,3,4,5]         출력 : [1]
- 입력 : [1,3,2,4,2]         출력 : [1,2,3]
*/

/**
 * 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
 * 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

  1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
  2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
  3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

  1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
  가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

function solution(answers) {
  let oneMathDie = [1, 2, 3, 4, 5];
  let twoMathDie = [2, 1, 2, 3, 2, 4, 2, 5];
  let threeMathDie = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let answerCount = 0;
  let successRecord = [];
  let result = [];
  // 1. 각 수포자들의 규칙에 맞게 문제를 탐색한다.

  // 1-1. 1번 수포자의 규칙 : 1 2 3 4 5
  for (let i = 0; i < answers.length; i++) {
    if (oneMathDie[i % oneMathDie.length] === answers[i]) answerCount++;
  }

  // 1-2. 1번 수포자의 성적 입력 및 초기화
  successRecord.push(answerCount);
  answerCount = 0;

  // 1-3. 2번 수포자의 규칙 : 2 1 2 3 2 4 2 5
  for (let i = 0; i < answers.length; i++) {
    if (twoMathDie[i % twoMathDie.length] === answers[i]) answerCount++;
  }

  // 1-4. 2번 수포자의 성적 입력 및 초기화
  successRecord.push(answerCount);
  answerCount = 0;

  // 1-5. 3번 수포지의 규칙 : 3 3 1 1 2 2 4 4 5 5
  for (let i = 0; i < answers.length; i++) {
    if (threeMathDie[i % threeMathDie.length] === answers[i]) answerCount++;
  }

  successRecord.push(answerCount);
  answerCount = 0;

  // 2. 최다 득점자
  let bestScore = Math.max(...successRecord);

  // 3. 최다 득점자 찾아내기
  for (let i = 0; i < successRecord.length; i++) {
    if (successRecord[i] === bestScore) result.push(i + 1);
  }

  return result;
}

const answerA = solution([1, 2, 3, 4, 5]);
const answerB = solution([1, 3, 2, 4, 2]);

console.log(answerA); // [1]
console.log(answerB); // [1,2,3]

/** 🔆 해설
 * 1. 각 수포자들의 규칙에 맞게 문제를 탐색한다. → 임의의 규칙 배열을 만들었지만 %를 이용해서 answers가 더 길 경우 방어한다.
 * 2. 각 수포자들이 맞은 문제를 작성한다. → 만약 최다 득점자가 같을 경우 오름차순
 * 3. 최다 득점자를 찾아낸다.
 */

/* 다른 사람의 코드에서 개선할 점
 * 채점할 사람이 3명으로 한정되어 있다는 점
 */

function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}
