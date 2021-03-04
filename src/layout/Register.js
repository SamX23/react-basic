import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, Container, Row, Button } from "react-bootstrap";
import { Store } from "../context/store";

export default function Register() {
  const { dispatch } = useContext(Store);
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
    <Container className="my-3">
      <Form onSubmit={submitID}>
        <Row>
          <Form.Group className="col-md-6">
            <Form.Label>First Name</Form.Label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label>Last Name</Form.Label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="col-md-6">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              id="inputEmail"
              placeholder="email@domain.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPasword"
              placeholder="p4ssw0rd!@#"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Form.Text id="passwordHelpBlock" className="text-muted">
              Password must be 8 characters minimum, contain letters, numbers,
              and must not contain spaces, special characters, or emoji.
            </Form.Text>
          </Form.Group>
        </Row>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
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
        </Form.Group>
        <Form.Group>
          <Form.Label>Additional Address</Form.Label>
          <Form.Control
            type="text"
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
        </Form.Group>
        <Row>
          <Form.Group className="col-md-6">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
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
          </Form.Group>
          <Form.Group className="col-md-4">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
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
          </Form.Group>
          <Form.Group className="col-md-2">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="number"
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
          </Form.Group>
        </Row>

        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
}
