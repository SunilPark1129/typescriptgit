export default function Main() {
  let num: number;
  const arr: string[] = [];

  arr.push("4");
  arr.push("2");
  arr.push("1");
  return (
    <div>
      {arr.map((x) => (
        <p>{x}</p>
      ))}
    </div>
  );
}
