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

  const ThemeButton = styled(Button)`
    padding: 2rem;
    margin: 2rem;
  `;

  return (
    <div className="home__top">
      <HeaderJumbotron>
        <JumboTron hTitle="Basic of React">
          <p>A Sami's personal training web to implement React Technology.</p>
        </JumboTron>

        <Button onClick={count}>
          Count :
          <Badge variant="light">
            {(counter > 5 && "Enough! please reset.") || counter}
          </Badge>
        </Button>
        <Button onClick={() => setCounter(0)}>Reset</Button>
        <Button onClick={toggleTheme}>Change Block</Button>
        <ThemeButton style={themes} variant="primary">
          Learn more
        </ThemeButton>
      </HeaderJumbotron>
    </div>
  );
}
