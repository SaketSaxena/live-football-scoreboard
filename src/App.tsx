import React, { useState } from "react";
import StartGame from "./component/StartGame";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { ScoreBoardType } from "./types";
import ScoreBoard from "./component/ScoreBoard";
import UpdateScore from "./component/UpdateScore";
import { getNextGameNo, sortScoreBoard } from "./util/board";

const App = () => {
  //const [scoreBoard, setScoreBoard] = useLocalStorage("scoreBoard", []);
  const [scoreBoard, setScoreBoard] = useState<ScoreBoardType[]>([]);
  const [updateScore, setUpdateScore] = useState(undefined);

  const startNewGame = (newScoreBoard: ScoreBoardType) => {
    newScoreBoard.gameNumber = getNextGameNo(scoreBoard);
    scoreBoard.push(newScoreBoard);
    setScoreBoard([...scoreBoard]);
  };

  const updateScoreBoard = (gameNumber, homeTeamScore, awayTeamScore) => {
    scoreBoard.forEach((score) => {
      if (score.gameNumber == gameNumber) {
        score.homeTeam.score = homeTeamScore;
        score.awayTeam.score = awayTeamScore;
      }
    });
    setScoreBoard([...sortScoreBoard(scoreBoard)]);
    setUpdateScore(undefined);
  };

  const finishGame = (gameIndex) => {
    scoreBoard.forEach((item, index) => {
      if (index === gameIndex) scoreBoard.splice(index, 1);
    });
    setScoreBoard([...scoreBoard]);
  };

  return (
    <Container maxWidth="lg">
      <h1>Welcome to Live Football Scoreboard</h1>
      <Grid container>
        <Grid item xs={6}>
          {updateScore ? (
            <UpdateScore
              updateScore={updateScore}
              updateScoreBoard={updateScoreBoard}
            />
          ) : (
            <StartGame startNewGame={startNewGame} />
          )}
        </Grid>
        <Grid item xs={6}>
          <ScoreBoard
            scoreBoard={scoreBoard}
            finishGame={finishGame}
            setUpdateScore={setUpdateScore}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
