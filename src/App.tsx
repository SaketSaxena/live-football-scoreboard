import React from "react";
import StartGame from "./component/StartGame";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg">
      <h1>Welcome to Live Football Scoreboard</h1>
      <Grid container>
        <Grid item xs={6}>
          <StartGame />
        </Grid>
        <Grid item xs={6}>
          ...
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
