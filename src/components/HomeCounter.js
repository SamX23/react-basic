import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export const HomeCounter = () => {
  const [state, setState] = useState({ seconds: 0 });

  useEffect(() => {
    setInterval(() => {
      setState((state) => ({
        seconds: state.seconds + 1,
      }));
    }, 1000);
  }, []);

  return (
    <Container className="p-2">
      <p>You are on this page for {state.seconds} seconds.</p>
    </Container>
  );
};
