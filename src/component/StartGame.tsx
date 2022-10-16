import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

const StartGame = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="Home Team Name" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Away Team Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="success">
              Start new game
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default StartGame;
