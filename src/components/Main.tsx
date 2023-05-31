export default function Main() {
  let num: number;
  const arr: string[] = [];

  arr.push("4");
  arr.push("2");
  arr.push("1");
  num = 3;

  function vaildatable(): string[] {
    const temp = [];

    for (let c of arr) {
      if (num > Number(c)) {
        temp.push(c);
      }
    }

    return temp;
  }

  const output: string[] = vaildatable();

  interface Person {
    name: string;
    age: number;
    hobby: string[];
    callGreeting(): string;
  }

  class Person {
    constructor(name: string, age: number, hobby: string[]) {
      this.name = name;
      this.age = age;
      this.hobby = hobby;
    }
    callGreeting() {
      return `My name is ${this.name} and I am ${
        this.age
      }. My hobbies are ${this.hobby.join(", ")}.`;
    }
  }

  const me = new Person("sun", 15, ["playing soccer", "sleeping", "running"]);

  return (
    <div>
      <p>{output}</p>
      <p>{me.callGreeting()}</p>
    </div>
  );
}
