export default function Utility() {
  interface UserInfo {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  //   type UserKey = keyof UserInfo;

  //   const VIPUser: UserKey = "name";

  const obj1: Partial<UserInfo> = {
    id: 1,
    name: "sunil",
  };

  const obj2: Required<UserInfo> = {
    id: 2,
    name: "jess",
    age: 4,
    gender: "f",
  };

  const obj3: Readonly<UserInfo> = {
    id: 3,
    name: "sj",
    age: 6,
    gender: "m",
  };

  console.log(obj1, obj2, obj3);

  //   Record
  type Grade = "1" | "2" | "3" | "4";
  type Score = "A" | "B" | "C" | "D";

  const scores: Record<Grade, Score> = {
    "1": "B",
    "2": "C",
    "3": "A",
    "4": "B",
  };

  console.log(scores["1"]);

  interface VIPUser {
    id: number;
    name: string;
    age: number;
  }

  function isValid(user: VIPUser): object {
    const result: Record<keyof VIPUser, boolean> = {
      id: user.id !== null,
      name: user.name !== "",
      age: user.age > 5,
    };
    return result;
  }

  //   Pick<T, K> = Type에서 Key만 가져와 사용하겠다는 의미. obj: Pick<User, "id" | "name"> = {}
  //   Omit<T, K> = Pick의 반대
  //   Exclude<T1,T2> = T1에서 T2를 제외한다는 의미
  //   NonNullable<Type> = null과 undefined를 제외한다.

  const ck = isValid({ id: 2, name: "sunil", age: 6 });
  console.log(ck);

  return <div>Utility</div>;
}
