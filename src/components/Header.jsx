import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/rest">Rest</Link>
        <Link to="/context-api">Context Api</Link>
      </nav>
    </header>
  );
}

export default Header;
