import React, { useEffect, useState } from "react";
import { Button, Container } from "reactstrap";
import "./Games.css";
import batu from "../assets/batu.png";
import gunting from "../assets/gunting.png";
import kertas from "../assets/kertas.png";

function Games() {
  const [playerPick, setPlayerPick] = useState(null);
  const [comPick, setComPick] = useState(null);
  const [result, setResult] = useState(null);
  const options = [batu, gunting, kertas];
  const playerName = "Player";
  const comName = "COM";

  function comRandom() {
    const random = options[Math.floor(Math.random() * options.length)];
    setComPick(random);
    return random;
  }

  function startGame(params) {
    setPlayerPick(params);
    comRandom();
  }

  function resetGame() {
    setPlayerPick(null);
    setComPick(null);
    setResult(null);
  }

  useEffect(() => {
    if (playerPick !== null && comPick !== null) {
      if (playerPick === comPick) return setResult("DRAW");
      if (playerPick === gunting && comPick === kertas) return setResult(playerName + " WIN");
      if (playerPick === batu && comPick === gunting) return setResult(playerName + " WIN");
      if (playerPick === kertas && comPick === batu) return setResult(playerName + " WIN");
      if (playerPick === gunting && comPick === batu) return setResult(comName + " WIN");
      if (playerPick === batu && comPick === kertas) return setResult(comName + " WIN");
      if (playerPick === kertas && comPick === gunting) return setResult(comName + " WIN");
    } else return setResult("VS");
  }, [playerPick, comPick]);

  return (
    <div className="App">
      <div className="Navbar">
        <Button>Back</Button>
        <h3>ROCKPAPERSCISSOR</h3>
      </div>
      <Container className="Game">
        <div className="Player">
          <h1>0</h1>
          <h1>{playerName}</h1>
          <div className="Pick">
            {options.map((option, index) => (
              <button key={index} color="none" onClick={() => startGame(option)} disabled={playerPick}>
                <img src={option} alt="player" />
              </button>
            ))}
          </div>
        </div>
        <div className="Result">
          <h1>{result}</h1>
          <Button onClick={resetGame}>Reset</Button>
        </div>
        <div className="COM">
          <h1>0</h1>
          <h1>{comName}</h1>
          <div className="Pick">
            <Button color="none">{comPick && <img src={comPick} alt="com" />}</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Games;
