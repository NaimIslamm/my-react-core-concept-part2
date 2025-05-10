// doing state manage-----------

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //   add-------
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  //   reduce------
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div
      style={{
        border: "1px solid green",
        borderRadius: "10px",
        backgroundColor: "tomato",
        padding: "10px",
      }}
    >
      <h3>Count:{count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
