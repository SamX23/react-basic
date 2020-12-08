import React, { useEffect } from "react";
import { SetContext, UpdateContext } from "../context/store";
import styled from "@emotion/styled";

import HomeHeader from "../components/HomeHeader";
import Items from "../components/Items";
import JumboTron from "../components/JumboTron.js";
import HomeButtons from "../components/HomeButtons";
import { HomeTypeBox } from "../components/HomeTypeBox";
import { HomeCounter } from "../components/HomeCounter";

export default function Home() {
  // custom hook calls for setter and getter from context
  const { themeState } = SetContext();
  const { toggleTheme } = UpdateContext();

  useEffect(() => {
    console.log("Home was mounted !");
    return () => {
      console.log("Home was unmounted !");
    };
  }, []);

  const themes = {
    backgroundColor: themeState ? "#333" : "#ccc",
    color: themeState ? "#CCC" : "#333",
  };

  const HomePage = styled("div")`
    width: 100%;
  `;

  return (
    <HomePage className="text-center">
      <HomeHeader />
      <JumboTron bgColor="black">
        <Items />
      </JumboTron>
      <HomeCounter />
      <HomeTypeBox />
      <HomeButtons toggleTheme={toggleTheme} themes={themes} />
    </HomePage>
  );
}
