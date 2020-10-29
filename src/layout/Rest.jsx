import React, { useEffect, useState } from "react";

export default function Rest() {
  const [pokeDetails, setPokeDetails] = useState([]);

  const URL = "https://pokeapi.co/api/v2/pokemon";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(async (res) => {
        // async await on map
        const getResults = await Promise.all(
          res.results.map(
            async (i) =>
              await fetch(`${URL}/${i.name}`).then((res) => res.json())
          )
        );
        setPokeDetails(getResults);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(pokeDetails);

  return (
    <div>
      <center>
        <h1>Rest Contact List</h1>
      </center>
      {pokeDetails && pokeDetails.length > 0 ? (
        pokeDetails.map((i) => (
          <div key={i.name} className="card mb-3">
            <div className="row no-gutters">
              <div class="col-md-4">
                <img
                  className="card-img"
                  src={i.sprites.front_default}
                  alt="pokemon sprites"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{i.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {i.abilities.length > 0 && i.abilities[0].ability.name}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
