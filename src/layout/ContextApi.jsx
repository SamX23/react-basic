import React, { useContext, useEffect } from "react";
import { Store } from "../context/store";

import "../styles/Rickmorty.css";

function ContextApiContainer() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 &&
      fetch(
        "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
      )
        .then((res) => res.json())
        .then((res) =>
          dispatch({
            type: "FETCH_DATA",
            item: res._embedded.episodes,
          })
        );
  }, [state.episodes.length, dispatch]);

  const toggleFav = (episode) => {
    const itemInFav = state.favourites.includes(episode);

    let dispatchItem = {
      type: "ADD_FAV",
      item: episode,
    };

    if (itemInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (fav) => fav.id !== episode.id
      );
      dispatchItem = {
        type: "REMOVE_FAV",
        item: favWithoutEpisode,
      };
    }

    return dispatch(dispatchItem);
  };

  return (
    <div className="Rickmorty__episodes">
      <div className="Episodes__header">
        {console.log(state)}
        <h1>Rick and Morty</h1>
        <p>Pick the favourite episodes</p>
        <div className="Episodes__favourites">
          Favourite(s) {state.favourites.length}
        </div>
      </div>
      <div className="Episodes__content">
        {state.episodes.map((episode) => (
          <div className="Episodes__layout" key={episode.id}>
            <img
              src={episode.image.medium}
              alt={`Rick and Morty ${episode.name}`}
            />
            <h6>{episode.name}</h6>
            <div>
              <p>
                Season: {episode.season} | Number: {episode.number}
              </p>
              <button onClick={() => toggleFav(episode)}>
                <span role="img" aria-label="love">
                  ♥️
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContextApiContainer;
