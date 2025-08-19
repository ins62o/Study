{
  // Enum : 여러가지의 상수값들을 한곳에 모아서 정리 (자바스크립트에는 존재 X)
  enum Days {
    Monday = 1, // 원래는 0이지만 1부터 시작되게 바꿈 (문자열도 가능하지만 하나하나 수동적으로 해야함)
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Saturday);
  const day: Days = Days.Saturday;
  console.log(day); // 5 : 인덱스로 계산이 된다.

  // enum을 쓰면안되는 이유
  /*
   * 1. enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당할 수 있는 문제가 있다.
   * 위 예제는 1부터 7까지 있지만 10으로 해도 오류가 나지 않는다.
   */

  // Union으로 하는 좋은 예 (대체가능함)
  type DaysofWeek = "Monday" | "Tuesday" | "Wednesday";

  let dayofWeek: DaysofWeek = "Monday";
}
