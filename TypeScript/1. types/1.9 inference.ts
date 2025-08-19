{
  // Type Inference (타입 추론)

  let text = "hello";
  text = "inseong";

  function print(message: string) {
    console.log(message);
  }

  print("hello");

  function add(x: number, y: number): number {
    return x + y;
  }

  const result = add(1, 2);
}
