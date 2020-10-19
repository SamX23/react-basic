import React, { useContext, useEffect, useState } from "react";
import appContext from "./store";
import Items from "./Items";

function Home() {
  const storeContext = useContext(appContext);
  const [counter, setCounter] = useState(storeContext);

  useEffect(() => {
    console.log("Home was mounted !");
    return () => {
      console.log("Home was unmounted !");
    };
  }, []);

  useEffect(() => {
    console.log("counter has been set !");
  }, [counter]);

  const count = () => setCounter((x) => (x += 1));

  return (
    <div>
      <h1>This Homepage</h1>
      <Items />
      <button onClick={count}>
        Count : {(counter > 5 && "Enough! please reset.") || counter}
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default Home;
