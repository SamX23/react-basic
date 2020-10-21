import React, { useEffect, useState } from "react";
import profile from "../profile.json";

export default function About() {
  const [visited, setVisited] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setVisited((x) => (x += 1));
  }, []);

  const showAbout = () => (!show ? setShow(true) : setShow(false));

  return (
    <div className="about">
      <h1>This is about page</h1>
      <p>About page has been visited for {visited} times!</p>
      <div className="about__button">
        <button onClick={showAbout}>Show my details</button>
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
