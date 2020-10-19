import React, { useContext, useEffect, useState } from "react";
import profile from "./profile.json";
import appContext from "./store";

function About() {
  const storeContext = useContext(appContext);
  const [visited, setVisited] = useState(storeContext);
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
              <p>Name : {item.name}</p>
              <p>Address : {item.address.city}</p>
              <p>
                Birth :{" "}
                {`${item.birth.date} ${item.birth.month} ${item.birth.year}`}
              </p>
              <p>Contacts : </p>
              <ul>
                <li>Phone : {item.contacts.phone}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default About;
