import React from "react";

import { Jumbotron } from "react-bootstrap";
import styled from "@emotion/styled";

export default function JumboTron({ children, hTitle, bgColor }) {
  const HeaderJumbotron = styled(Jumbotron)`
    background-color: ${bgColor || "#282c34"};
    text-align: center;
    border-radius: 0;
    margin-bottom: 0;
    & > h1 {
      font-weight: 900;
      color: #61dafb;
    }

    & > p {
      color: #ffffff;
      padding-top: 10px;
      font-size: 20px;
      letter-spacing: 0.01em;
      font-weight: 200 !important;
    }
  `;

  return (
    <HeaderJumbotron>
      <h1>{hTitle}</h1>
      {children}
    </HeaderJumbotron>
  );
}
