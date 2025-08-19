{
  // JavaScript ✖
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript 💚
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript ✖
  function jsFetchNum(id) {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript 💚
  function FetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript → TypeScript
  // Optional parameter → ?
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("Steve", "Jobs");
  printName("inseong");

  // Default parameter
  function printMessage(message: string = "안녕하세요") {
    console.log(message);
  }

  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 5, 6, 7));
}
