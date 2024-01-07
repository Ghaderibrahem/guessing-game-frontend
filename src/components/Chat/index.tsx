import { ForumRounded } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { chats as staticChats } from "@/utils/constants";
import { useState } from "react";
import { TChats } from "@/utils/types";
import { useAppContext } from "@/utils/contextProviders";
import { socket } from "@/utils/socketIo";
function Chat() {
  const { playerName }: any = useAppContext();
  const [value, setValue] = useState<string>("");
  const [chats, setChats] = useState<Array<TChats>>(staticChats);
  const handleSendMessage = () => {
    socket.emit("sendMessage", {
      name: playerName,
      message: value,
      color: "#FC6950",
    });
    setChats((prev) => [
      ...prev,
      {
        name: playerName,
        message: value,
        color: "#FC6950",
      },
    ]);
    setValue("");
  };
  return (
    <Box>
      <Typography
        color={"white"}
        id="discrete-slider-custom"
        gutterBottom
        sx={{
          alignSelf: "self-start",
          paddingLeft: "15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ForumRounded
          fontSize="small"
          style={{ color: "#F0566B", marginRight: "5px" }}
        />
        Chat
      </Typography>
      <Box
        width={"100%"}
        sx={{
          borderRadius: "10px",
          backgroundColor: "#1B222C",
          minHeight: "200px",
          overflowY: "hidden",
          overflowX: "hidden",
          position: "relative",
          pt: 2,
          border: "1px solid #3B414D",
        }}
      >
        {chats.length ? (
          chats.map((item, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={"start"}
              alignItems="center"
              p={1}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  textTransform: "uppercase",
                  color: item.color,
                }}
              >
                {item?.name}:
              </Typography>
              <Typography
                sx={{
                  fontSize: "10px",
                  color: !item.message ? "#FF3EEC" : "#FFFFFF",
                  py: "2px",
                  px: "5px",
                  ml: 1,
                  background: "gray",
                  borderRadius: 1,
                }}
              >
                {item.message}
              </Typography>
            </Box>
          ))
        ) : (
          <></>
        )}
        <Box
          width={"100%"}
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
          sx={{
            background: "#494b4c",
            position: "absolute",
            bottom: 0,
            p: 1,
            height: "55px",
          }}
        >
          <TextField
            sx={{
              background: "#151A22",
              color: "#ffff",
              width: "72%",
              height: "100%",
              borderRadius: "5px",
              "& .MuiInputBase-root": {
                height: "100%",
              },
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            sx={{
              background: "linear-gradient(0.25turn, #E74287, #FC6950)",
              color: "#ffff",
              py: 1,
              px: 2,
              borderRadius: 3,
              width: "25%",
              height: "100%",
            }}
            onClick={handleSendMessage}
          >
            Start
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Chat;
