// import React from "react";

type PostProps = {
  url: string;
  artist?: string;
};

export default function ChildProp({ url }: PostProps) {
  return (
    <img
      src={url}
      alt="img"
      width={200}
      height={200}
      style={{ objectFit: "cover" }}
    />
  );
}
