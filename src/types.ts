export interface ScoreBoardType {
  gameNumber: number;
  homeTeam: TeamScore;
  awayTeam: TeamScore;
}

export interface TeamScore {
  name: string;
  score: number;
}
