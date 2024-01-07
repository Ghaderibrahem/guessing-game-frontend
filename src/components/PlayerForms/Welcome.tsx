import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { fullHW, flexCenter, welcomeRoot, nameInput } from "./styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { handleSendEvent } from "@/utils/socketIo";
import { useAppContext } from "@/utils/contextProviders";
import { socket } from "@/utils/socketIo";
const Welcome = () => {
  const { setPlayerName }: any = useAppContext();
  const [value, setValue] = useState<string>("");

  const largerThan500 = useMediaQuery("(min-width:500px)");
  const acceptBackground =
    value && value.length >= 3
      ? "linear-gradient(0.25turn, #E74287, #FC6950)"
      : "#8690A4";

  return (
    <Box sx={welcomeRoot}>
      <Box
        sx={{
          ...flexCenter,
          ...fullHW,
          flexDirection: "column",
        }}
      >
        <Box sx={{ ...flexCenter, ...fullHW, height: "35%" }}>
          <Typography fontSize={largerThan500 ? 22 : 14} color={"#A9B0BF"}>
            Welcome
          </Typography>
        </Box>
        <Box
          sx={{
            ...flexCenter,
            ...fullHW,
            flexDirection: "column",
            justifyContent: "space-around",
            height: "35%",
          }}
        >
          <Typography fontSize={8} color={"#A9B0BF"}>
            Please Insert Your Name
          </Typography>
          <TextField
            id="name"
            variant="outlined"
            size="small"
            sx={nameInput}
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue(event.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              socket.emit("enteredUser", {
                name: value,
              });
              setPlayerName(value);
              handleSendEvent();
            }}
            sx={{
              background: acceptBackground,
              width: "80%",
              borderRadius: "4px",
              color: "#fff",
            }}
          >
            Accept
          </Button>
        </Box>
        <Box sx={{ height: "30%" }} />
      </Box>
    </Box>
  );
};

export default Welcome;
