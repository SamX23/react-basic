import React from "react";

export default function Login() {
  return (
    <div className="Login">
      <form>
        <p>Email</p>
        <input type="email" name="username" id="" />
        <p>Password</p>
        <input type="password" name="password" id="" />
        <button type="submit">Log In</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
