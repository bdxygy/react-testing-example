import { useState } from "react";

export const WithStateComponent = () => {
  const [title, setTitle] = useState<string>("Title Normal");

  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => setTitle("Title Changed")}>Change Title</button>
    </>
  );
};
