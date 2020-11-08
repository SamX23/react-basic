import React, { useEffect, useState } from "react";
import JumboTron from "../components/JumboTron.js";
import Loading from "../components/Loading";

import { Container, Card, CardColumns } from "react-bootstrap";

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

  return (
    <>
      <JumboTron hTitle="PokeDex" />
      <Container className="text-center my-4">
        <CardColumns>
          {pokeDetails && pokeDetails.length > 0 ? (
            pokeDetails.map((i) => (
              <Card key={i.name} border="dark">
                <Card.Img
                  style={{ width: "10rem" }}
                  variant="top"
                  src={i.sprites.front_default}
                  alt="pokemon sprites"
                />
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    {i.name.toUpperCase()}
                  </Card.Subtitle>
                  <Card.Text>
                    {i.abilities.length > 0 && i.abilities[0].ability.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Loading />
          )}
        </CardColumns>
      </Container>
    </>
  );
}
