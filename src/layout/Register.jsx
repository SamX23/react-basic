import React, { useContext, useState } from "react";
import { Store } from "../context/store";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

export default function Register() {
  const { state, dispatch } = useContext(Store);
  const history = useHistory();
  const [user, setUser] = useState({
    login: true,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: {
      address: "",
      additionalAddress: "",
      state: "",
      country: "",
      zip: 0,
    },
  });

  const Container = styled.div`
    margin-top: 5vh;
  `;

  const FormRow = styled.form`
    padding: 5px;
  `;

  const FormGroup = styled.form`
    padding: 5px;
  `;

  const submitID = (e) => {
    e.preventDefault();
    dispatch({
      type: "USER_LOGIN",
      item: user,
    });
    console.log(user);
    history.push("/");
  };

  return (
    <Container className="Register container">
      <form onSubmit={submitID}>
        <FormRow className="form-row">
          <div className="form-group col-md-6">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
        </FormRow>
        <FormRow className="form-row">
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="email@domain.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPasword"
              placeholder="p4ssw0rd!@#"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <small id="passwordHelpBlock" className="form-text text-muted">
              Password must be 8 characters minimum, contain letters, numbers,
              and must not contain spaces, special characters, or emoji.
            </small>
          </div>
        </FormRow>
        <FormGroup className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={user.address.address}
            onChange={(e) =>
              setUser({
                ...user,
                address: { ...user.address, address: e.target.value },
              })
            }
          />
        </FormGroup>
        <FormGroup className="form-group">
          <label>Additional Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddressAddition"
            placeholder="Apartment, studio, or floor"
            value={user.address.additionalAddress}
            onChange={(e) =>
              setUser({
                ...user,
                address: { ...user.address, additionalAddress: e.target.value },
              })
            }
          />
        </FormGroup>
        <FormRow className="form-row">
          <div className="form-group col-md-6">
            <label>State</label>
            <input
              type="text"
              className="form-control"
              id="inputState"
              placeholder="West Java"
              value={user.address.state}
              onChange={(e) =>
                setUser({
                  ...user,
                  address: { ...user.address, state: e.target.value },
                })
              }
            />
          </div>
          <div className="form-group col-md-4">
            <label>Country</label>
            <input
              type="text"
              className="form-control"
              id="inputCountry"
              placeholder="Indonesia"
              value={user.address.country}
              onChange={(e) =>
                setUser({
                  ...user,
                  address: { ...user.address, country: e.target.value },
                })
              }
            />
          </div>
          <div className="form-group col-md-2">
            <label>Zip</label>
            <input
              type="number"
              className="form-control"
              id="inputZip"
              placeholder="12345"
              value={user.address.zip}
              onChange={(e) =>
                setUser({
                  ...user,
                  address: { ...user.address, zip: e.target.value },
                })
              }
            />
          </div>
        </FormRow>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </Container>
  );
}
