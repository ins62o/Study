{
  /**
   * JavaScript
   * Primitive : number, string, boolean, bigint, symbol, null, undefined
   * Object : function, array,
   */

  // number (정수, 소수점, 음수)
  const num: number = 123;

  // string
  const str: string = "hello";

  // boolean (true or false)
  const boal: boolean = true;

  // undefined (값이 있는지 없는지 결정되지 않은 상태)
  let name: undefined; // ✖
  let age: number | undefined;
  age = undefined;
  age = 123;

  function find(): number | undefined {
    return undefined;
  }

  // null (값이 없음)
  let person: null; // ✖
  let person2: string | null;
  person2 = "인성";
  person2 = null;

  // unknown ✖ (무슨 타입이 들어올지 모름)
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any ✖ (무슨 타입이 들어오든 상관없어)
  let anything: any = 0;
  anything = "hello";

  // void (함수에서 아무것도 리턴하지 않을 때)
  function print() {
    console.log("hello");
    return;
  }

  let unusable: void = undefined; // ✖

  // never (어떤것도 리턴하지 않는 함수)
  // @ts-ignore
  function throwError(message: string): never {
    // message → server (log)
    // 1. throw new Error(message);
    // 2. while(true) {}

    let neverEnding: never; // ✖
  }

  // object
  let obj: object; // ✖
  function acceptSomeObject(obj: object) {}

  acceptSomeObject({ name: "inseong" });
  acceptSomeObject({ animal: "dog" });
}
