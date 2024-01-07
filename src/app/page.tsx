"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container, Grid } from "@mui/material";
import PlayerForms from "@/components/PlayerForms";
import Chart from "@/components/Chart";
import Scores from "@/components/Scores";
import Chat from "@/components/Chat";
import { useState } from "react";
import { AppContext } from "@/utils/contextProviders";
export default function Home() {
  const [playerName, setPlayerName] = useState<string>("");
  const [totalPoints, setTotalPoints] = useState<number>(1000);
  const [points, setPoints] = useState<number>(100);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [startGame, setStartGame] = useState<boolean>(false);

  const theme = createTheme({
    typography: {
      button: {
        textTransform: "none",
      },
      fontFamily: '"Saira", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider
        value={{
          playerName,
          setPlayerName,
          points,
          setPoints,
          finalScore,
          setFinalScore,
          multiplier,
          setMultiplier,
          totalPoints,
          setTotalPoints,
          startGame,
          setStartGame,
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            backgroundColor: "#191d24",
          }}
        >
          <Container
            sx={{
              display: "flex",
            }}
            maxWidth="lg"
          >
            <Grid
              container
              display={"flex"}
              justifyContent={"space-between"}
              spacing={2}
            >
              <Grid item xs={4} sx={{ height: "60%" }}>
                <PlayerForms />
              </Grid>
              <Grid item xs={8} sx={{ height: "fit-content" }}>
                <Chart />
              </Grid>
              <Grid item xs={6}>
                <Scores />
              </Grid>
              <Grid item xs={6}>
                <Chat />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </AppContext.Provider>
    </ThemeProvider>
  );
}
