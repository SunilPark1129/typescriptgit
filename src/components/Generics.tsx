export default function Generics() {
  // T로 연결 시키기.
  function getSize<T>(arr: T[]): number {
    return arr.length;
  }

  const arr1 = [1, 2, 3];

  const output1 = getSize<number>(arr1);

  const arr2 = ["a", "b", "c", "d"];

  const output2 = getSize<string | number>(arr2);

  interface Mobile<T> {
    name: string;
    price: number;
    option: T;
  }

  const model1: Mobile<object> = {
    name: "s21",
    price: 999,
    option: {
      color: "red",
      coupon: false,
    },
  };

  const model2: Mobile<string> = {
    name: "s20",
    price: 500,
    option: "good",
  };

  interface modelOption {
    color: string;
    coupon: boolean;
  }

  const model3: Mobile<modelOption> = {
    name: "s21",
    price: 1000,
    option: {
      color: "red",
      coupon: false,
    },
  };

  console.log(model1, model2, model3);

  interface User {
    name: string;
    age: number;
  }

  interface Car {
    name: string;
    color: string;
  }

  //   interface Book {
  //     price: number;
  //   }

  const user: User = { name: "sunil", age: 10 };
  const car: Car = { name: "bmw", color: "red" };
  //   const book: Book = { price: 40 };

  //   string이 와야된다는 의미이다.
  function showName<T extends { name: string }>(data: T): string {
    return data.name;
  }

  showName(user);
  showName(car);

  //   이것은 에러가 생김. price가 없기 떄문에
  //   showName(book);

  return (
    <div>
      <p>{output1}</p>
      <p>{output2}</p>
    </div>
  );
}
