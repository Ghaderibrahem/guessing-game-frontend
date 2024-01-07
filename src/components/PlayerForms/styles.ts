const welcomeRoot = {
  display: "flex",
  height: "95%",
  width: "100%",
  alignSelf: "center",
  border: "1px solid #3B414D",
  borderRadius: "5px",
  backgroundColor: "#232A39",
};

const playerInputsRoot = {
  display: "flex",
  height: "95%",
  width: "100%",
  alignSelf: "center",
  borderRadius: "5px",
  backgroundColor: "#191d24",
  alignItems: "baseline",
};

const counterInputsRoot = {
  display: "flex",
  flexDirection: "row",
  border: "1px solid #3B414D",
  margin: "0 5px 5px 5px",
  borderRadius: "5px",
  backgroundColor: "#232A39",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 5px 3px 5px",
};

const fullHW = {
  height: "100%",
  width: "100%",
};

const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const nameInput = {
  background: "#151A22",
  width: "80%",
  borderRadius: "4px",
  border: "1px solid #3B414D",
  input: { color: "#fff" },
};

const CounterFieldRoot = {
  display: "flex",
  flexDirection: "row",
  border: "1px solid #3B414D",
  margin: "0 5px 5px 5px",
  borderRadius: "5px",
  backgroundColor: "#232A39",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 5px 3px 5px",
};

const counterBtns = {
  border: "1px solid #726d6d",
  borderRadius: "5px",
  padding: "0px",
};

const counterField = {
  height: "15%",
  alignItems: "end",
  display: "flex",
  marginBottom: "5px",
};

const sliderBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  borderRadius: "10px",
  backgroundColor: "#232A39",
  padding: "5px 15px",
};

const slider = {
  "& .MuiSlider-markLabelActive": {
    backgroundColor: "transparent",
  },
  "& .MuiSlider-markLabel": {
    backgroundColor: "transparent",
  },
  "& .MuiSlider-track": {
    background: "linear-gradient(0.25turn, #E74287, #FC6950)",
    border: "none",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#8a98b8",
  },
  "& .MuiSlider-thumb": {
    background: "linear-gradient(0.25turn, #E74287, #FC6950)",
    border: "1px solid white",
  },
};

const startBtn = {
  background: "linear-gradient(0.25turn, #E74287, #FC6950)",
  width: "95%",
  borderRadius: "4px",
  color: "#fff",
  marginBottom: "5px",
};

const title = {
  alignSelf: "self-start",
  // paddingLeft: "15px",
  display: "flex",
  alignItems: "center",
};

const counterTextFieldBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "0 5px",
};

const counterTextField = {
  background: "#151A22",
  "& .MuiInputBase-root": {
    height: 20,
  },
  borderRadius: "4px",
  input: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
};
export {
  welcomeRoot,
  playerInputsRoot,
  fullHW,
  flexCenter,
  nameInput,
  counterInputsRoot,
  CounterFieldRoot,
  counterBtns,
  counterField,
  sliderBox,
  slider,
  startBtn,
  title,
  counterTextFieldBox,
  counterTextField,
};
