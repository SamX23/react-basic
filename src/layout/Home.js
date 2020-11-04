import React, { useEffect, useState } from "react";
import { SetContext, UpdateContext } from "../context/store";
import HomeHeader from "../components/HomeHeader";
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
      <HomeHeader
        count={count}
        setCounter={setCounter}
        counter={counter}
        toggleTheme={toggleTheme}
        themes={themes}
      />

      <div className="home__middle">
        <Items />

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
