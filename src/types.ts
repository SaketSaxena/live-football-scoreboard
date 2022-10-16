export interface ScoreBoardType {
  homeTeam: TeamScore;
  awayTeam: TeamScore;
}

export interface TeamScore {
  name: string;
  score: number;
}
