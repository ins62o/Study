{
  // Array
  const fruits: string[] = ["🍅", "🍌"];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple → 권장하지 않음 → interface, type alias, class
  let student: [string, number];
  student = ["정인성", 100];

  student[0]; // "정인성"
  student[1]; // 100

  const [name, score] = student;
}
