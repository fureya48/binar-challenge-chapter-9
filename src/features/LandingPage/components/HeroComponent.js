import React from "react";
import { Button } from "reactstrap";
import "../LPage.css";

function HeroComponent() {
  return (
    <div className="Hero">
      <div className="title text-center w-50">
        <h1>THIS IS TRADITIONAL GAME</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nemo voluptates vel nostrum ipsa eos. Soluta aperiam ducimus exercitationem? Explicabo quisquam minima modi eos omnis?</p>
      </div>
      <Button color="warning">
        <b className="text-white">PLAY NOW</b>
      </Button>
    </div>
  );
}

export default HeroComponent;
