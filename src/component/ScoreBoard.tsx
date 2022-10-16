import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ScoreBoardType } from "../types";
import Button from "@mui/material/Button";

type Props = {
  scoreBoard: ScoreBoardType;
  finishGame: () => void;
  setUpdateScore: () => void;
};

const ScoreBoard: React.FC<Props> = ({
  scoreBoard,
  finishGame,
  setUpdateScore,
}) => {
  console.log("board", scoreBoard);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50, maxWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Home Team</TableCell>
            <TableCell align="left">Away Team</TableCell>
            <TableCell align="left" />
            <TableCell align="left" />
          </TableRow>
        </TableHead>
        <TableBody>
          {scoreBoard.map((score, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">
                {score.homeTeam.name} - {score.homeTeam.score}
              </TableCell>
              <TableCell align="left">
                {score.awayTeam.name} - {score.awayTeam.score}
              </TableCell>
              <TableCell align="left">
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => finishGame(index)}
                >
                  Finish Game
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => setUpdateScore(score)}
                >
                  Update Score
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreBoard;
