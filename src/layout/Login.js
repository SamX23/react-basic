import React from "react";
import Container from "../components/Container.js";

export default function Login() {
  return (
    <Container>
      <form>
        <p>Email</p>
        <input type="email" name="username" id="" />
        <p>Password</p>
        <input type="password" name="password" id="" />
        <button type="submit">Log In</button>
        <button type="reset">Reset</button>
      </form>
    </Container>
  );
}
