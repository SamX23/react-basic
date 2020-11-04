import React, { useEffect, useState } from "react";
import { SetContext, UpdateContext } from "../context/store";
import Items from "../components/Items";

export default function Home() {
  // hook setter and getter
  const [counter, setCounter] = useState(0);
  // custom hook calls for setter and getter from context
  const { themeState } = SetContext();
  const { toggleTheme } = UpdateContext();

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
    backgroundColor: themeState ? "#333" : "#ccc",
    color: themeState ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div className="home">
      <div className="home__top">
        <h1>This Homepage</h1>
        <Items />
        <button onClick={count}>
          Count : {(counter > 5 && "Enough! please reset.") || counter}
        </button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={toggleTheme}>Change Block</button>
        <div style={themes}>Block</div>
      </div>
      <div className="home__middle">
        <div className="editor__input">
          <h3>Text editor input</h3>
        </div>

        <div className="editor__output">
          <h6>This is output from text editor</h6>
        </div>
      </div>
    </div>
  );
}
