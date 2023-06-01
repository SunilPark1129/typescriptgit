import { useState } from "react";

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
      <div>
        {data && (
          <img
            src={data}
            alt="img"
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
    </div>
  );
}
