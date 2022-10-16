import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { TeamScore } from "../types";

type Props = {
  updateScoreBoard: () => void;
};

const StartGame: React.FC<Props> = ({ updateScoreBoard }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (values) => {
    const homeTeam: TeamScore = {
      name: values.homeTeamName,
      score: 0,
    };

    const awayTeam: TeamScore = {
      name: values.awayTeamName,
      score: 0,
    };

    updateScoreBoard({ homeTeam, awayTeam });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Home Team Name"
              variant="outlined"
              required
              {...register("homeTeamName")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Away Team Name"
              variant="outlined"
              required
              {...register("awayTeamName")}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="success" type="submit">
              Start new game
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default StartGame;
