import { useState, useEffect } from "react";
import { BarChartSharp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useAppContext } from "@/utils/contextProviders";
import { initScores, scoreColumns, scores } from "@/utils/constants";
import DataTable from "../DataTable";
function Scores() {
  const { finalScore, playerName }: any = useAppContext();
  const [rows, setRows] = useState(initScores);

  useEffect(() => {
    if (finalScore) {
      setRows([
        {
          id: 1,
          name: playerName,
          score: finalScore,
        },
        ...scores,
      ]);
    }
  }, [finalScore]);

  return (
    <Box width={"100%"}>
      <Typography
        color={"white"}
        id="discrete-slider-custom"
        gutterBottom
        sx={{
          alignSelf: "self-start",
          display: "flex",
          alignItems: "center",
        }}
      >
        <BarChartSharp fontSize="small" style={{ color: "#F0566B" }} />
        Ranking
      </Typography>
      <Box
        sx={{
          borderRadius: "10px",
          backgroundColor: "#151A22",
          border: "1px solid #3B414D",
        }}
      >
        <DataTable rows={rows} columns={scoreColumns} />
      </Box>
    </Box>
  );
}

export default Scores;
