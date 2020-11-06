import React from "react";

import { Jumbotron, Button, Badge } from "react-bootstrap";
import styled from "@emotion/styled";

export default function JumboTron({ children, hTitle, bgColor }) {
  const HeaderJumbotron = styled(Jumbotron)`
    background-color: ${bgColor || "#282c34"};
    color: #61dafb;
    border-radius: 0;
    margin-bottom: 0;
    & > h1 {
      font-weight: 900;
    }
  `;

  return (
    <HeaderJumbotron>
      <h1>{hTitle}</h1>
      {children}
    </HeaderJumbotron>
  );
}
