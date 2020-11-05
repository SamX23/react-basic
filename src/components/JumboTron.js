import React from "react";

import { Jumbotron, Button, Badge } from "react-bootstrap";
import styled from "@emotion/styled";

export default function JumboTron({ JumboTronTitle }) {
  const HeaderJumbotron = styled(Jumbotron)`
    background-color: #282c34;
    color: #61dafb;
    border-radius: 0;
    & > h1 {
      font-weight: 900;
    }
  `;

  return (
    <div className="home__top">
      <HeaderJumbotron>
        <h1>{JumboTronTitle}</h1>
      </HeaderJumbotron>
    </div>
  );
}
