import React from "react";
import JumboTron from "./JumboTron.js";

import { Button, Badge } from "react-bootstrap";
import styled from "@emotion/styled";

export default function HomeHeader({
  counter,
  setCounter,
  count,
  toggleTheme,
  themes,
}) {
  const HeaderJumbotron = styled("div")`
    & > button {
      margin: 5px;
    }
  `;

  return (
    <div className="home__top">
      <HeaderJumbotron>
        <JumboTron hTitle="Basic of React">
          <p>A Sami's personal training web to implement React Technology.</p>
        </JumboTron>

        <Button onClick={() => setCounter((x) => (x += 1))}>
          Count :
          <Badge variant="light">
            {(counter > 5 && "Enough! please reset.") || counter}
          </Badge>
        </Button>
        <Button onClick={() => setCounter(0)}>Reset</Button>
        <Button onClick={toggleTheme}>Change Block Color</Button>
        <Button style={themes} variant="primary">
          Learn more
        </Button>
      </HeaderJumbotron>
    </div>
  );
}
