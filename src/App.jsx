import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  // const [count, setCount] = useState(0);

  // simple function---------------------

  // function handleClick() {
  //   alert("button clicked");
  // }

  // simple function---------------------

  // arrow function-------------------------

  const handleClick = () => {
    alert("alert by arrow function");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };

  // arrow function-------------------------

  return (
    <>
      <h2>Vite + React</h2>
      <button onClick={handleClick}>Click Me</button>
      {/* button er mddhe direct arrow function-- */}
      <button
        onClick={() => {
          alert("clicked by direct arrow f. into button");
        }}
      >
        Click Me Direct
      </button>
      {/* button er mddhe direct arrow function--na hole parameer pathaile save korar sathe sathei kaj hoye jabe..click valueless hoye jabe */}
      <button
        onClick={() => {
          addToFive(2);
        }}
      >
        Click Me
      </button>
      <Counter></Counter>
    </>
  );
}

export default App;
