import React, { useContext, useEffect } from "react";
import { Store } from "../context/store";

function actionDispatch(dispatch) {
  return dispatch({ type: "COMPLETE_TODO", payload: 1 });
}

function RestRickMorty() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    );
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  return (
    <div>
      {console.log(state)}
      <h1>Rick and Morty</h1>
      <p>Pick the favourite episodes</p>
    </div>
  );
}

export default RestRickMorty;
