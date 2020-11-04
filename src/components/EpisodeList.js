import React from "react";

export default function EpisodeList({ episodes, toggleFav, favourites }) {
  return episodes.map((episode) => (
    <div className="Episodes__layout" key={episode.id}>
      <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
      <h6>{episode.name}</h6>
      <div className="Episode__details">
        <div>
          Season: {episode.season} | Number: {episode.number}
        </div>
        <button onClick={() => toggleFav(episode)}>
          {favourites.find((fav) => fav.id === episode.id) ? "Remove" : "Fav"}
        </button>
      </div>
    </div>
  ));
}
