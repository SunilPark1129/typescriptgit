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
  return (
    <div>
      <p>{add(3, 5)}</p>
      <p>{isOrder(3, 5) ? "3 is bigger than 5" : "5 is bigger than 3"}</p>
      <p>{hello(null, "sunil")}</p>
    </div>
  );
}
