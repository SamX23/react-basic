import React, { useEffect, useState } from "react";
import { SetContext, UpdateContext } from "../context/store";
import styled from "@emotion/styled";

import HomeHeader from "../components/HomeHeader";
import Items from "../components/Items";
import JumboTron from "../components/JumboTron.js";

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

  const HomePage = styled("div")`
    width: 100%;
  `;

  return (
    <HomePage>
      <HomeHeader
        count={count}
        setCounter={setCounter}
        counter={counter}
        toggleTheme={toggleTheme}
        themes={themes}
      />

      <JumboTron bgColor="black">
        <Items />
      </JumboTron>

      <JumboTron hTitle="Text editor input" bgColor="grey">
        <div className="editor__output">
          <h6>This is output from text editor</h6>
        </div>
      </JumboTron>
    </HomePage>
  );
}
