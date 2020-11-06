import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Store } from "../context/store";

import Loading from "../components/Loading";
import "../styles/EpisodeList.css";

const EpisodesList = lazy(() => import("../components/EpisodeList"));

function ContextApiContainer() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
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
  }, [dispatch]);

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

  const props = {
    episodes: state.episodes,
    toggleFav: toggleFav,
    favourites: state.favourites,
  };

  return (
    <Suspense
      fallback={<div className="Loading__screen">Loading Page .....</div>}
    >
      <div className="Episode__list">
        <div className="Episodes__header">
          <h1>Rick and Morty</h1>
          <p>Pick the favourite episodes</p>
          <div className="Episodes__favourites">
            Favourite(s) {state.favourites.length}
          </div>
        </div>
        <div className="Episodes__content">
          {state && state.episodes.length > 0 ? (
            <EpisodesList {...props} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </Suspense>
  );
}

export default ContextApiContainer;
