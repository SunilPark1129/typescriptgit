import { useState } from "react";
import ChildProp from "./ChildProp";

type PostProps = {
  url: string;
  artist?: string;
};

async function getPosts(): Promise<PostProps> {
  const res = await fetch("https://api.catboys.com/img");
  const data = await res.json();
  return data;
}

export default function Fetch() {
  const [data, setData] = useState<string | null>(null);

  async function requestFetch() {
    const res = await getPosts();
    setData(res.url);
  }
  return (
    <div>
      <button onClick={requestFetch}>Click</button>
      <div>{data && <ChildProp url={data} />}</div>
    </div>
  );
}
