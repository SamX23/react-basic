import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export const HomeTypeBox = () => {
  const [textArea, setTextArea] = useState({ value: "Typing Test" });

  return (
    <Container className="typing__test">
      <Row>
        <Col className="editor__output">
          <h6>{textArea.value}</h6>
        </Col>
        <Col className="editor__input">
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            value={textArea.value}
            onChange={(e) => setTextArea({ value: e.target.value })}
          />
        </Col>
      </Row>
    </Container>
  );
};
