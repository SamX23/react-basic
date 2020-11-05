import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Store } from "../context/store";
import JumboTron from "../components/JumboTron.js";
import profile from "../profile.json";

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
  const user = state.user;

  return (
    <div className="about">
      <JumboTron JumboTronTitle="About Page" />
      <p>You visited this page for {state.visited.length} times!</p>
      <div className="aboutUser">
        {user.login ? (
          <div>
            <p>First Name : {user.firstName}</p>
            <p>last Name : {user.lastName}</p>
            <p>Email : {user.email}</p>
          </div>
        ) : (
          <div className="about__prompt">
            <p>Please register to see your account</p>
            {/* <button>
              <Link to="/login">Login</Link>
            </button> */}
            <button>
              <Link to="/register">Register</Link>
            </button>
          </div>
        )}
      </div>
      <div className="about__button">
        <button onClick={showAbout}>Show Details from JSON</button>
      </div>
      {show && (
        <div className="about__profile">
          <h4>My Profile</h4>
          {profile.map((item) => (
            <div className="about__profileDetails" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Name : {item.name}</h5>
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
    </div>
  );
}
