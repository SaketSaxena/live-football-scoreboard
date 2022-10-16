import { ScoreBoardType } from "../types";

export const getNextGameNo = (scoreBoard: ScoreBoardType[]): number => {
  const tempScoreBoard = [...scoreBoard];
  return tempScoreBoard.length > 0
    ? tempScoreBoard.sort((a, b) => (a.gameNumber > b.gameNumber ? -1 : 1))[0]
        .gameNumber + 1
    : 1;
};

export const sortScoreBoard = (scoreBoard: ScoreBoardType[]) => {
  return scoreBoard.sort((a, b) =>
    a.homeTeam.score + a.awayTeam.score === b.homeTeam.score + b.awayTeam.score
      ? a.gameNumber < b.gameNumber
        ? -1
        : 1
      : a.homeTeam.score + a.awayTeam.score >
        b.homeTeam.score + b.awayTeam.score
      ? -1
      : 1
  );
};
