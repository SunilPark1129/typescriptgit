export default function Main() {
  let num: number;
  const arr: string[] = [];

  arr.push("4");
  arr.push("2");
  arr.push("1");
  num = 3;
  return (
    <div>
      {arr.map((x) => {
        if (Number(x) > num) {
          return <p>{x}</p>;
        }
      })}
    </div>
  );
}
