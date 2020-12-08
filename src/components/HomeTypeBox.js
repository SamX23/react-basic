import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export const HomeTypeBox = () => {
  const [textArea, setTextArea] = useState("");

  return (
    <Container className="w-50 p-3">
      <Row>
        <Col className="border text-left p-2">
          <h6>{textArea || "Set Text Area"}</h6>
        </Col>
        <Col>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            value={textArea}
            placeholder="Type something"
            onChange={(e) => setTextArea(e.target.value)}
          />
        </Col>
      </Row>
    </Container>
  );
};
