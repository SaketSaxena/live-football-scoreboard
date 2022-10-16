import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { ScoreBoardType } from "../types";

type Props = {
  updateScore: ScoreBoardType;
  updateScoreBoard: () => void;
};

const UpdateScore: React.FC<Props> = ({ updateScore, updateScoreBoard }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (values) => {
    updateScoreBoard(
      updateScore.gameNumber,
      values.homeTeamScore,
      values.awayTeamScore
    );
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label={`${updateScore?.homeTeam?.name} Team Score`}
              type="number"
              variant="outlined"
              required
              defaultValue={updateScore?.homeTeam?.score || ""}
              {...register("homeTeamScore")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={`${updateScore?.awayTeam?.name} Team Score`}
              type="number"
              variant="outlined"
              required
              defaultValue={updateScore?.awayTeam?.score || ""}
              {...register("awayTeamScore")}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="success" type="submit">
              Update Score
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default UpdateScore;
