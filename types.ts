export interface SourceQuestion {
  level: string;
  hint: string;
  answer: string;
}

export interface Question extends SourceQuestion {
  id: number;
  scrambled: string[];
}

export enum GameState {
  StartScreen,
  Playing,
  Finished,
}

export type UserAnswers = {
  [key: number]: string;
};

export interface HighScore {
  nickname: string;
  score: number;
  date: string;
}

export type PersonalBests = {
  [nickname: string]: number;
};