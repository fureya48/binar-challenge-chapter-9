import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";

function NavbarComponent() {
  return (
    <div className="Navbar">
      <nav className="Nav">
        <div className="link">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <h3>Binar Games</h3>
          </Link>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <p>Home</p>
          </Link>
          <Link to="/leaderboard" style={{ color: "black", textDecoration: "none" }}>
            <p>Leaderboard</p>
          </Link>
          <Link to="/profile" style={{ color: "black", textDecoration: "none" }}>
            <p>Profile</p>
          </Link>
        </div>
        <Button color="warning">Login</Button>
      </nav>
    </div>
  );
}

export default NavbarComponent;
