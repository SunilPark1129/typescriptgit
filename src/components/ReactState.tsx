import React, { useState } from "react";

export default function ReactState() {
  interface User {
    id: number;
    name?: string;
    gender?: "m" | "f";
  }
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);

  interface CountName {
    name: string;
  }

  function countHandler(e: React.MouseEvent<HTMLButtonElement>): void {
    const { name }: CountName = e.target as HTMLInputElement;

    if (name === "inc") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  }

  function userHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value }: { name: string; value: string } = e.target;

    setUser((prev) => ({
      ...prev,
      id: 0,
      [name]: value,
    }));
  }

  return (
    <div>
      <button onClick={countHandler} name="inc">
        Increase
      </button>
      <button onClick={countHandler} name="dec">
        Decrease
      </button>
      <p>{count}</p>

      <input type="text" onChange={userHandler} name="name" />
      <input type="text" onChange={userHandler} name="gender" />
      <p>{user?.name || "no name yet"}</p>
      <p>{user?.gender || "no gender yet"}</p>
    </div>
  );
}
