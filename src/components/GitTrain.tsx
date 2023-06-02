export default function GitTrain() {
  type Units = {
    id: number;
    name: string;
    price: number;
    type: string;
  };

  const unit: Units = {
    id: 0,
    name: "car",
    price: 31000,
    type: "car",
  };

  console.log(unit);

  return (
    <div>
      {Object.entries(unit).map(([key, value]) => (
        <p key={key}>{`${key}: ${value}`}</p>
      ))}
      <p>I removed 8 commits</p>
    </div>
  );
}
