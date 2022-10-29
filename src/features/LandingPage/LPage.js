import React from "react";
import HeroComponent from "./components/HeroComponent";
import ListGame from "./components/ListGame";
import NavbarComponent from "../Navbar/NavbarComponent";

function LPage() {
  return (
    <div className="LPage">
      <NavbarComponent />
      <HeroComponent />
      <ListGame />
    </div>
  );
}

export default LPage;
