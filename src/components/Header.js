import React from "react";
import styled from "@emotion/styled";

import { Link } from "react-router-dom";

export default function Header() {
  const HeaderBar = styled.div`
    backgroundColor: #20232a,
    position: fixed,
    minHeight: 7vh,
    display: flex,
    flexDirection: column,
    alignItems: center,
    justifyContent: center,
    fontSize: calc(10px + 2vmin),
    color: white,
  `;

  return (
    <HeaderBar>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/rest">Rest</Link>
        <Link to="/context-api">Context Api</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/register">Sign Up</Link>
      </nav>
    </HeaderBar>
  );
}
