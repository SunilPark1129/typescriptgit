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
<<<<<<< HEAD

  const unit2: Units = {
    id: 1,
    name: "pen",
    price: 400,
    type: "tool",
  };
=======
>>>>>>> parent of 3eb90cc (Update GitTrain.tsx)

  console.log(unit);

  return (
    <div>
      {Object.entries(unit).map(([key, value]) => (
        <p key={key}>{`${key}: ${value}`}</p>
      ))}
    </div>
  );
}
