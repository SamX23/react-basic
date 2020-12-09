import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Store } from "../context/store";

export default function Account() {
  const { state } = useContext(Store);
  const user = state.user;
  return (
    <div className="about__registeredUser text-center">
      {user.login ? (
        <div>
          <h3>Registered User</h3>
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
  );
}
