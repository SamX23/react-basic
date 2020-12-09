import React, { useContext, useEffect } from "react";
import { Store } from "../context/store";

export default function RequestUserRepos({ username }) {
  const { state, dispatch } = useContext(Store);
  const url = `https://api.github.com/users/${username || "samx23"}/repos`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: "FETCH_GITHUB",
          item: res,
        })
      )
      .catch((e) => console.log(e));
  }, [dispatch, url]);

  const git = state.github;
  console.log(git);

  return (
    <ul className="list-group mx-auto mb-5 w-75">
      {git &&
        git.length > 0 &&
        git.map((item) => (
          <li key={item.id} className="list-group-item">
            <p>
              <strong>Repo: </strong> {item.name}
            </p>
            <p>
              <strong>Description: </strong>{" "}
              {item.description || "No Description"}
            </p>
            <p>
              <strong>URL: </strong>
              <a href={item.html_url}>{item.html_url}</a>
            </p>
          </li>
        ))}
    </ul>
  );
}
