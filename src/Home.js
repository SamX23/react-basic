import React, { useEffect, useState } from "react";
import { SetTheme, UpdateTheme } from "./store";
import Items from "./Items";

function Home() {
  const [counter, setCounter] = useState(0);
  const dark = SetTheme();
  const changeTheme = UpdateTheme();

  useEffect(() => {
    console.log("Home was mounted !");
    return () => {
      console.log("Home was unmounted !");
    };
  }, []);

  useEffect(() => {
    console.log("counter has been set !");
  }, [counter]);

  const count = () => setCounter((x) => (x += 1));

  const themes = {
    backgroundColor: dark ? "#333" : "#ccc",
    color: dark ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div>
      <h1>This Homepage</h1>
      <Items />
      <button onClick={count}>
        Count : {(counter > 5 && "Enough! please reset.") || counter}
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={changeTheme}>Change Block</button>
      <div style={themes}>Block</div>
    </div>
  );
}

export default Home;
