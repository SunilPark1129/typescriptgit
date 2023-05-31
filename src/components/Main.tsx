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

  return <div>{output}</div>;
}
