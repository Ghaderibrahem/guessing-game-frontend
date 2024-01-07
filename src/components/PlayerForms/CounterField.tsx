import React, { useState } from "react";
import { Box, TextField, IconButton, Typography } from "@mui/material";
import { ArrowDropUpRounded, ArrowDropDownRounded } from "@mui/icons-material";
import { TCounterInputs } from "@/utils/types";
import {
  CounterFieldRoot,
  counterBtns,
  counterTextFieldBox,
  counterTextField,
} from "./styles";

const CounterField = ({ step, lable, initValue, setField }: TCounterInputs) => {
  const [value, setValue] = useState<number>(initValue);

  const handleIncrease = () => {
    setValue(value + step);
    setField(value + step);
  };

  const handleDecrease = () => {
    if (value - step > 1) {
      setValue(value - step);
      setField(value - step);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(event.target.value) || 0);
    setField(parseFloat(event.target.value) || 0);
  };

  return (
    <Box sx={CounterFieldRoot}>
      <Box
        sx={{
          marginTop: "12px",
        }}
      >
        <IconButton onClick={handleDecrease} sx={counterBtns}>
          <ArrowDropDownRounded style={{ color: "white" }} />
        </IconButton>
      </Box>
      <Box sx={counterTextFieldBox}>
        <Typography fontSize={8} fontWeight="500" color="white">
          {lable}
        </Typography>
        <TextField
          fullWidth
          sx={counterTextField}
          value={value}
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{
          marginTop: "12px",
        }}
      >
        <IconButton onClick={handleIncrease} sx={counterBtns}>
          <ArrowDropUpRounded style={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CounterField;
