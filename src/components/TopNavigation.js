import React, { useContext } from "react";
import { Store } from "../context/store";

import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import styled from "@emotion/styled";

export default function TopNavigation() {
  const { state } = useContext(Store);

  const TopNav = styled(Navbar)`
    background-color: #20232a;
    min-height: 6vh;
    justify-content: space-around;
    & > .GitHub {
      color: white;
    }
  `;

  const Logo = styled(Navbar.Brand)`
    & > span {
      font-weight: 600;
    }
  `;

  return (
    <TopNav variant="dark">
      <LinkContainer to="/">
        <Logo>
          <Image
            width="40"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
          />
          <span>Basic React</span>
        </Logo>
      </LinkContainer>

      <Nav>
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>

        <NavDropdown title="Api Example">
          <LinkContainer to="/rest">
            <NavDropdown.Item>Rest</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/context-api">
            <NavDropdown.Item>Rest & Context Api</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>

        <LinkContainer to="/login">
          <Nav.Link>Sign In</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/register">
          <Nav.Link>Sign Up</Nav.Link>
        </LinkContainer>
        {state.user.login && (
          <LinkContainer to="/account">
            <Nav.Link>Account</Nav.Link>
          </LinkContainer>
        )}
      </Nav>

      <Nav>
        <Nav.Link
          className="GitHub"
          href="https://github.com/SamX23/react-basic/"
        >
          GitHub
        </Nav.Link>
      </Nav>
    </TopNav>
  );
}
