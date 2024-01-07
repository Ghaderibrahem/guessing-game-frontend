export type TAppContext = {
  playerName: string;
  setPlayerName: React.Dispatch<React.SetStateAction<string>>;
  totalPoints: number;
  setTotalPoints: React.Dispatch<React.SetStateAction<number>>;
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  finalScore: number;
  setFinalScore: React.Dispatch<React.SetStateAction<number>>;
  multiplier: number;
  setMultiplier: React.Dispatch<React.SetStateAction<number>>;
  startGame: boolean;
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TMarks = {
  value: number;
  label: string;
};

export type TPlayers = {
  id: number;
  name: string;
  point: string;
  multiplier: string;
};
export type TScores = {
  id: number | string;
  name: string;
  score: string;
};

export type TCounterInputs = {
  step: number;
  lable: string;
  initValue: number;
  setField: React.Dispatch<React.SetStateAction<number>>;
};

export type TChats = { name: string; message: string; color: string };
