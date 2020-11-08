import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import styled from "@emotion/styled";

export default function Footer() {
  const FooterContainer = styled(Container)`
    color: #999;
    background-color: #20232a;
    padding: 2em 2em;
  `;

  return (
    <FooterContainer fluid className="text-center pt-4">
      <Container>
        <Row>
          <Col className="text-center md-6">
            <Image src="logo512.png" width={100} />
            <p className="mt-4">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <a href="https://samx23.github.io"> Sami Kalammallah </a>
            </p>
          </Col>
          <Col className="md-6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Col>
          <Col className="md-6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
}
