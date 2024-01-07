import React, { useEffect, useState } from "react";
import { Box, Typography, Slider } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { infoCardBox } from "./styles";
import { useAppContext } from "@/utils/contextProviders";
import * as PIXI from "pixi.js";
import { Stage, Sprite, useTick, Graphics, Container, Text } from "@pixi/react";
import { chartMarks } from "@/utils/constants";
const Game = ({
  start,
  count,
  stop,
}: {
  start: boolean | undefined;
  count: number;
  stop: boolean | undefined;
}) => {
  const contextProps: any = useAppContext();

  const [x, setX] = useState<number>(25);
  const [y, setY] = useState<number>(400);
  const [controlPointX, setControlPointX] = useState<number>(25);
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    if (start) {
      setActive(true);
    }
    if (stop) {
      setActive(false);
    }
  }, [start, stop]);
  useTick((delta) => {
    setX(x + 0.5);
    setControlPointX(controlPointX + 0.5);
    setY(x > 100 ? y - 0.5 * Math.sin((x - 1) / 200) : y);
    if (x > 400 && y < 90) {
      setActive(false);
      contextProps?.setStartGame(false);
      contextProps?.setFinalScore(count);
    }
  }, active);

  return (
    <>
      <Sprite image="./circule.png" x={x} y={y} anchor={0.5} scale={1.3} />
      <Graphics
        draw={(g) => {
          g.clear()
            .lineStyle(5, 0xcc1839, 1)
            .moveTo(x, y)
            .quadraticCurveTo(controlPointX, 400, 25, 400);
        }}
      />
    </>
  );
};
const Chart = () => {
  const { playerName, totalPoints, startGame, setFinalScore }: any =
    useAppContext();
  const [count, setCount] = useState<number>(0.0);
  const [stop, setStop] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (!startGame || stop) return;
    const timer = setInterval(() => {
      setCount((c) => +Math.min(c + 0.01, 10).toFixed(2));
    }, 14);
    return () => clearInterval(timer);
  }, [startGame, stop]);

  useEffect(() => {
    if (count > 5) {
      setTimeout(() => {
        setStop(true);
        setFinalScore(count);
      }, 50);
    }
  }, [count]);

  return (
    <Box sx={{ marginTop: "32px" }}>
      <Box
        width={"100%"}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        sx={infoCardBox}
      >
        <Box width="30%" sx={{ minHeight: "42px" }}>
          <MilitaryTechIcon fontSize="large" color="success" />
          <Typography>{playerName ? totalPoints : ""}</Typography>
        </Box>
        <Box width="40%" sx={{ minHeight: "42px" }}>
          <AccountCircleIcon fontSize="large" color="info" />
          <Typography>{playerName ?? ""}</Typography>
        </Box>
        <Box width="20%" sx={{ minHeight: "42px" }}>
          <AvTimerIcon fontSize="large" color="warning" />
          <Typography>
            {playerName
              ? `${new Date().getHours()}:${new Date().getMinutes()}`
              : ""}
          </Typography>
        </Box>
      </Box>
      <Box
        width={"100%"}
        sx={{
          borderRadius: "12px",
          background: "#232A39",
          minHeight: "440px",
          border: "1px solid #3B414D",
          marginTop: "14px",
          position: "relative",
        }}
      >
        <Stage
          options={{
            backgroundColor: 0x232a39,
            antialias: true,
            width: 300,
            height: 400.667,
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          width={553.444}
          height={400.667}
        >
          <Container x={280} y={150}>
            <Text
              text={`${count}x`}
              anchor={{ x: 0.5, y: 0.5 }}
              style={
                new PIXI.TextStyle({
                  fill: ["#E74287", "#FC6950"],
                  fontSize: 50,
                })
              }
            />
          </Container>
          {startGame && <Game start={startGame} count={count} stop={stop} />}
        </Stage>

        <Box sx={{ padding: "0 20px" }}>
          <Slider
            aria-label="Custom marks slider"
            min={0}
            max={10}
            step={1}
            disabled
            disableSwap
            marks={chartMarks.map((mark) => ({
              ...mark,
              label: (
                <Box
                  sx={{
                    color: "#817c7c",
                  }}
                >
                  {mark.label}
                </Box>
              ),
              style: { color: "#fff" },
            }))}
            sx={{
              position: "absolute",
              bottom: "-2px",
              width: "90%",
              "& .MuiSlider-thumb": {
                display: "none",
              },
            }}
            valueLabelDisplay="auto"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Chart;
