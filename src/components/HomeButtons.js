/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from "react";
import { Container, Button, Badge } from "react-bootstrap";
import styled from "@emotion/styled";

export default function HomeButtons({ toggleTheme, themes }) {
  const [counter, setCounter] = useState(0);
  const ButtonGroup = styled(Container)`
    background: #282c34;
    & > button {
      border-radius: 0;
      border-color: 0;
      background-color: #61dafb;
      color: black;
      margin: 10px;
    }
  `;

  return (
    <ButtonGroup fluid className="p-3">
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
    </ButtonGroup>
  );
}
