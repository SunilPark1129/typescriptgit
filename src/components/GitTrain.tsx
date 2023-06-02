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
  
   const unit2: Units = {
    id: 1,
    name: "pen",
    price: 400,
    type: "tool",
  };

  console.log(unit);

  return (
    <div>
      {Object.entries(unit).map(([key, value]) => (
        <p key={key}>{`${key}: ${value}`}</p>
      ))}
      {Object.entries(unit2).map(([key, value]) => (
        <p key={key}>{`${key}: ${value}`}</p>
      ))}
    </div>
  );
}
