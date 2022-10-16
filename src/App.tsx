import React from "react";
import StartGame from "./component/StartGame";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { ScoreBoardType } from "./types";
import { useLocalStorage } from "./hook/localStorage.js";
import ScoreBoard from "./component/ScoreBoard";

const App = () => {
  const [scoreBoard, setScoreBoard] = useLocalStorage("scoreBoard", []);

  const updateScoreBoard = (newScoreBoard: ScoreBoardType) => {
    setScoreBoard([...scoreBoard, newScoreBoard]);
  };

  return (
    <Container maxWidth="lg">
      <h1>Welcome to Live Football Scoreboard</h1>
      <Grid container>
        <Grid item xs={6}>
          <StartGame updateScoreBoard={updateScoreBoard} />
        </Grid>
        <Grid item xs={6}>
          <ScoreBoard scoreBoard={scoreBoard} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
