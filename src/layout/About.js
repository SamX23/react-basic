import React, { useContext, useEffect, useState } from "react";
import { Store } from "../context/store";
import JumboTron from "../components/JumboTron.js";
import profile from "../profile.json";
import RequestUserRepos from "../components/RequestUserRepos";

export default function About() {
  const { state, dispatch } = useContext(Store);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch({
      type: "VISITING",
      item: 1,
    });
  }, [dispatch]);

  const showAbout = () => (!show ? setShow(true) : setShow(false));
  const git = state.github[0];

  return (
    <div className="about">
      <JumboTron hTitle="My Github Profile" />
      <div className="about__history text-muted text-right m-2">
        <p>You visited this page for {state.visited.length} times!</p>
      </div>
      <div className="about__profile text-center">
        {git && (
          <div className="about__gitProfile" key={git.id}>
            <div className="card">
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                  Github Profile :{" "}
                  <a href={git.owner.html_url}>{git.owner.html_url}</a>
                </h6>
                <img src={git.owner.avatar_url} alt="avatar" />
              </div>
            </div>
          </div>
        )}

        {show && (
          <div className="about__gitProfileDetails p-3">
            {profile.map((item) => (
              <div className="about__profileDetails" key={item.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {item.contacts.email}
                    </h6>
                    <p className="card-text">
                      {`${item.birth.date} ${item.birth.month} ${item.birth.year}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="about__button p-3">
          <button onClick={showAbout}>
            {!show ? "Show" : "Hide"} Details from JSON
          </button>
        </div>
      </div>

      <RequestUserRepos />
    </div>
  );
}
