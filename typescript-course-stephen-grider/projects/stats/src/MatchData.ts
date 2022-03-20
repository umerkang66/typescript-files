import { MatchResult } from './MatchResult';

// MatchResult, we can do this by enums (that there should be one of the values from enum)
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
