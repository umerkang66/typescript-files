import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let currentTeamWins = 0;

    matches.forEach((match: MatchData): void => {
      if (match[1] === this.team && match[5] === MatchResult.HOME_TEAM_WON) {
        currentTeamWins++;
      } else if (
        match[2] === this.team &&
        match[5] === MatchResult.AWAY_TEAM_WON
      ) {
        currentTeamWins++;
      }
    });

    return `Team: ${this.team} won ${currentTeamWins} games`;
  }
}
