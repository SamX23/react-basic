import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from "@emotion/styled";

export default function Footer() {
  const FooterContainer = styled(Container)`
    color: #999;
    background-color: #20232a;
  `;
  return (
    <FooterContainer fluid>
      <Row>
        <Col>
          <p>Footer</p>
        </Col>
      </Row>
      <Row>
        &copy; {new Date().getFullYear()} Copyright{" "}
        <a href="https://samx23.github.io"> Sami Kalammallah </a>
      </Row>
    </FooterContainer>
  );
}
