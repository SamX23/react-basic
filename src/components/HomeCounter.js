import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const HomeCounter = () => {
  const [state, setState] = useState({ seconds: 0 });
  const tick = () =>
    setState((ticker) => ({
      seconds: ticker.seconds + 1,
    }));

  useEffect(() => {
    setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(setInterval(tick(), 1000));
    };
  }, []);

  return (
    <Container className="p-2">
      <p>You are on this page for {state.seconds} seconds.</p>
    </Container>
  );
};

export default HomeCounter;
