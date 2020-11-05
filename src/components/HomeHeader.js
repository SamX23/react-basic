import React from "react";
import JumboTron from "./JumboTron.js";

import { Jumbotron, Button, Badge } from "react-bootstrap";
import styled from "@emotion/styled";

export default function HomeHeader({
  counter,
  setCounter,
  count,
  toggleTheme,
  themes,
}) {
  const HeaderJumbotron = styled("div")`
    color: #61dafb;
    border-radius: 0;
    & > h1 {
      font-weight: 900;
    }
    & > button {
      margin: 5px;
    }
  `;

  return (
    <div className="home__top">
      <HeaderJumbotron>
        <JumboTron JumboTronTitle="Basic of React" />
        <Button onClick={count}>
          Count :
          <Badge variant="light">
            {(counter > 5 && "Enough! please reset.") || counter}
          </Badge>
        </Button>
        <Button onClick={() => setCounter(0)}>Reset</Button>
        <Button onClick={toggleTheme}>Change Block</Button>
        <Button style={themes} variant="primary">
          Learn more
        </Button>
      </HeaderJumbotron>
    </div>
  );
}
