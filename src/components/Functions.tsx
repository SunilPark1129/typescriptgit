export default function Functions() {
  function add(a: number, b: number): number {
    return a + b;
  }
  function isOrder(a: number, b: number): boolean {
    return a > b;
  }
  function hello(age: number | null, name: string): string {
    if (age) {
      return `my name is ${name}, and I am ${age} years old.`;
    }

    return `I am printing my name ${name}, but not my age.`;
  }
  function arrFn(...arr: string[]): any[] {
    const a = arr.map((item, id) => <p key={id}>{item}</p>);
    return a;
  }

  interface User {
    name: string;
    gender?: "m" | "f";
  }

  const obj1: User = { name: "sunil" };

  function objFn(this: User, age: number): string {
    return `${this.name} is ${age}.`;
  }

  interface Units {
    name: string;
    price: number;
  }

  function overload(name: string, price: null): string;
  function overload(name: string, price: number): Units;

  function overload(name: string, price: number | null): string | Units {
    if (!price) return `${name} has no price yet.`;
    return { name, price };
  }

  const ofn = overload("pencil", null);
  console.log(ofn);
  return (
    <div>
      <p>{add(3, 5)}</p>
      <p>{isOrder(3, 5) ? "3 is bigger than 5" : "5 is bigger than 3"}</p>
      <p>{hello(null, "sunil")}</p>
      {arrFn("sentence 1", "sentence 2")}
      <p>{obj1?.name}</p>
      <p>{objFn.bind(obj1)(5)}</p>
    </div>
  );
}
