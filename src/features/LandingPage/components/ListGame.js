import React from "react";
import { Container, Card, CardBody, CardTitle, Button } from "reactstrap";
import Picture from "../../../assets/logo 1.png";
import Picture2 from "../../../assets/2.png";
import "../LPage.css";

function ListGame() {
  const gameList = [
    {
      title: "Suit Game",
      pict: Picture,
      link: "/game/suit",
    },
    {
      title: "Coming Soon",
      pict: Picture2,
      link: "/game/test",
    },
    {
      title: "Coming Soon",
      pict: Picture2,
      link: "/game/test",
    },
    {
      title: "Coming Soon",
      pict: Picture2,
      link: "/game/test",
    },
  ];
  return (
    <div className="ListGame">
      <Container className="title p-5">
        <h1>LIST GAME</h1>
        <Container>
          <div className="background-list">
            {/* Input data from function */}
            {gameList &&
              gameList.map((game, index) => (
                <Card
                  className="d-flex flex-column align-items-center"
                  key={index}
                  style={{
                    width: "15rem",
                    height: "300px",
                    color: "white",
                  }}
                >
                  <img alt="suit" src={game.pict} style={{ width: "10rem" }} />
                  <CardBody className="text-center">
                    <CardTitle tag="h4">{game.title}</CardTitle>
                    <Button>
                      <b>START</b>
                    </Button>
                  </CardBody>
                </Card>
              ))}
          </div>
        </Container>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffa719"
          d="M0,224L40,208C80,192,160,160,240,160C320,160,400,192,480,224C560,256,640,288,720,266.7C800,245,880,171,960,160C1040,149,1120,203,1200,213.3C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default ListGame;
