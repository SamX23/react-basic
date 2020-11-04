import React from "react";

import { Jumbotron, Button, Badge } from "react-bootstrap";
import styled from "@emotion/styled";

export default function HomeHeader({
  counter,
  setCounter,
  count,
  toggleTheme,
  themes,
}) {
  const HeaderJumbotron = styled(Jumbotron)`
    background-color: #282c34;
    color: #61dafb;
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
        <h1>Basic of React</h1>
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
