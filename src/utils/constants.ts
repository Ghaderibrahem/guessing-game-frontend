import { TMarks, TPlayers, TScores, TChats } from "./types";
const marks: Array<TMarks> = [
  {
    value: 1,
    label: "1x",
  },
  {
    value: 2,
    label: "2x",
  },
  {
    value: 3,
    label: "3x",
  },
  {
    value: 4,
    label: "4x",
  },
  {
    value: 5,
    label: "5x",
  },
];

const chartMarks: Array<TMarks> = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },
  {
    value: 9,
    label: "9",
  },
  {
    value: 10,
    label: "10",
  },
];

const initPlayers: Array<TPlayers> = [
  {
    id: 2,
    name: "CPU 1",
    point: "-",
    multiplier: "-",
  },
  {
    id: 3,
    name: "CPU 2",
    point: "-",
    multiplier: "-",
  },
  {
    id: 4,
    name: "CPU 3",
    point: "-",
    multiplier: "-",
  },
  {
    id: 5,
    name: "CPU 4",
    point: "-",
    multiplier: "-",
  },
];
const initScores: Array<TScores> = [
  {
    id: 2,
    name: "-",
    score: "-",
  },
  {
    id: 3,
    name: "-",
    score: "-",
  },
  {
    id: 4,
    name: "-",
    score: "-",
  },
  {
    id: 5,
    name: "-",
    score: "-",
  },
];
const players: Array<TPlayers> = [
  {
    id: 2,
    name: "CPU 1",
    point: "100",
    multiplier: "7.53",
  },
  {
    id: 3,
    name: "CPU 2",
    point: "100",
    multiplier: "124",
  },
  {
    id: 4,
    name: "CPU 3",
    point: "100",
    multiplier: "684",
  },
  {
    id: 5,
    name: "CPU 4",
    point: "100",
    multiplier: "975",
  },
];
const scores: Array<TScores> = [
  {
    id: 2,
    name: "CPU 1",
    score: "7.53",
  },
  {
    id: 3,
    name: "CPU 2",
    score: "124",
  },
  {
    id: 4,
    name: "CPU 3",
    score: "684",
  },
  {
    id: 5,
    name: "CPU 4",
    score: "975",
  },
];

const playerInputsColumns: Array<string> = ["Name", "Point", "Multiplier"];

const scoreColumns = ["No.", "Name", "Score"];

const chats: Array<TChats> = [
  {
    name: "cpu 1",
    message: "hello",
    color: "red",
  },
  {
    name: "cpu 2",
    message: "hiiiii",
    color: "purple",
  },
];

export {
  marks,
  initPlayers,
  players,
  playerInputsColumns,
  chartMarks,
  initScores,
  scoreColumns,
  scores,
  chats,
};
