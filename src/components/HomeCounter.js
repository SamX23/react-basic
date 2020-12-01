import React, { useEffect, useState } from "react";

export const HomeCounter = () => {
  const [state, setState] = useState({ seconds: 0 });

  useEffect(() => {
    const subscribe = setInterval(ticker(), 1000);
    return clearInterval(subscribe);
  }, [state]);

  const ticker = () => {
    setState((state) => ({ seconds: state.seconds + 1 }));
  };

  return <div>Seconds : {state.seconds}</div>;
};
