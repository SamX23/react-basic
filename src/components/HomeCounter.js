import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export const HomeCounter = () => {
  const [state, setState] = useState({ seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => ({
        seconds: state.seconds + 1,
      }));
    }, 1000);
    return interval;
  }, []);

  return <Container className="p-3">Seconds : {state.seconds}</Container>;
};
