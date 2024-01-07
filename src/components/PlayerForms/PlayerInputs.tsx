import { useState, useEffect } from "react";
import { Box, Button, Grid, Slider, Typography } from "@mui/material";
import { SpeedSharp } from "@mui/icons-material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useAppContext } from "@/utils/contextProviders";
import {
  marks,
  initPlayers,
  players,
  playerInputsColumns,
} from "@/utils/constants";
import CounterField from "./CounterField";
import DataTable from "../DataTable";
import {
  counterField,
  flexCenter,
  slider,
  playerInputsRoot,
  startBtn,
  title,
  sliderBox,
} from "./styles";

const PlayerInputs = () => {
  const {
    setPoints,
    setMultiplier,
    setStartGame,
    playerName,
    points,
    multiplier,
    startGame,
  }: any = useAppContext();
  const [value, setValue] = useState<number | number[]>(3);
  const [rows, setRows] = useState(initPlayers);

  function valuetext(value: number) {
    return `${value}x`;
  }

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (playerName && startGame) {
      setRows([
        {
          id: 1,
          name: playerName,
          point: points,
          multiplier: multiplier,
        },
        ...players,
      ]);
    }
  }, [startGame]);

  return (
    <Box sx={playerInputsRoot}>
      <Grid container>
        <Grid item xs={6} sx={counterField}>
          <CounterField
            step={25}
            lable={"Points"}
            initValue={100}
            setField={setPoints}
          />
        </Grid>
        <Grid item xs={6} sx={counterField}>
          <CounterField
            step={0.25}
            lable={"Multiplier"}
            initValue={1}
            setField={setMultiplier}
          />
        </Grid>
        <Grid item xs={12} sx={{ ...flexCenter, alignItems: "baseline" }}>
          <Button
            variant="contained"
            onClick={() => {
              setStartGame(true);
            }}
            sx={startBtn}
          >
            Start
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ height: "50%", marginTop: "10px" }}>
          <Typography
            color={"white"}
            id="discrete-slider-custom"
            gutterBottom
            sx={title}
          >
            <EmojiEventsIcon fontSize="small" style={{ color: "#F0566B" }} />
            Current Round
          </Typography>
          <DataTable rows={rows} columns={playerInputsColumns} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            ...flexCenter,
            height: "20%",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <Typography
            color={"white"}
            id="discrete-slider-custom"
            gutterBottom
            sx={title}
          >
            <SpeedSharp fontSize="small" style={{ color: "#F0566B" }} />
            Speed
          </Typography>
          <Box sx={sliderBox}>
            <Slider
              aria-label="Custom marks slider"
              value={value}
              min={1}
              max={5}
              step={1}
              marks={marks.map((mark) => ({
                ...mark,
                label: (
                  <Box
                    sx={{
                      color: +mark.value <= +value ? "#F0566B" : "white",
                      fontSize: 10,
                    }}
                  >
                    {mark.label}
                  </Box>
                ),
                style: { color: "blue" },
              }))}
              sx={slider}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlayerInputs;
