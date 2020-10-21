import React, { useEffect, useState } from "react";

function Rest() {
  const [poke, setPoke] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setPoke(data);
      })
      .catch(console.log);
  }, []);

  console.log(typeof poke);
  console.log(poke.id);
  console.log(poke.name);

  return (
    <div>
      <center>
        <h1>Rest Contact List</h1>
      </center>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{"Sami"}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {"skalexsong@gmail.com"}
          </h6>
          <p className="card-text">{"React Developer"}</p>
        </div>
      </div>
    </div>
  );
}

export default Rest;
