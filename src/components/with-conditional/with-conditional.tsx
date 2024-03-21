import { useState } from "react";

export const WithConditionalComponent = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  if (!isDisplay)
    return (
      <>
        <h1>Not to Display</h1>
        <button onClick={() => setIsDisplay(true)}>Change to Display</button>
      </>
    );

  return <h1>To Display</h1>;
};
