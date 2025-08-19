{
  // Type Assertions 💥
  // 정말 장담하는 경우가 아니라면 사용하지 말 것

  function jsStrFunc(): any {
    return 2;
  }

  const result = jsStrFunc();
  console.log((result as string).length);

  const wrong: any = 5;

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();

  numbers!.push(2); // ! : 진짜 진짜 장담한다는 뜻 === Assertions

  const button = document.querySelector("class");
}
