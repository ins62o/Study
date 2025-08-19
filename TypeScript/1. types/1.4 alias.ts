{
  // Type Aliases
  type Text = string;
  const name: Text = "inseong";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  // 반드시 Student 타입에 있는 name과 age가 있어야 한다.
  const student: Student = {
    name: "inseong",
    age: 12,
  };

  // String Literal Types
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
}
