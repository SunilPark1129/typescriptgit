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
    hobby?: string[] | undefined;
    callGreeting(): string;
  }

  class Person {
    constructor(name: string, age: number, hobby?: string[]) {
      this.name = name;
      this.age = age;
      this.hobby = hobby;
    }
    callGreeting() {
      return `My name is ${this.name} and I am ${this.age}. My hobbies are ${
        this.hobby?.join(", ") ?? "none"
      }.`;
    }
  }

  interface Animal extends Person {
    type: string;
  }

  class Animal extends Person {
    constructor(name: string, age: number, type: string) {
      super(name, age);
      this.type = type;
    }
    callGreeting() {
      return `My name is ${this.name} and I am ${this.age}. I am a ${this.type}.`;
    }
  }

  const me = new Person("sun", 15, ["playing soccer", "sleeping", "running"]);
  const you = new Animal("jess", 10, "cat");

  type Gender = "m" | "f";

  interface Obj {
    name: string;
    gender: Gender;
    hobby: string[];
  }

  const obj: Partial<Obj> = {
    name: "sunil",
    gender: "m",
    hobby: ["a", "b"],
  };

  return (
    <div>
      <p>{output}</p>
      <p>{me.callGreeting()}</p>
      <p>{you.callGreeting()}</p>
      <p>
        {Object.entries(obj).map(([key, value]) => {
          return <p key={key}>{`${key}: ${value}`}</p>;
        })}
      </p>
    </div>
  );
}
