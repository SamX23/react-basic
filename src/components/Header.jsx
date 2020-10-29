import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/rest">Rest</Link>
        <Link to="/context-api">Context Api</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/register">Sign Up</Link>
      </nav>
    </header>
  );
}
