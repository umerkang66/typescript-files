import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../MatchResult';
import { dateStringToDate } from '../utils';

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

export class MatchReader extends CsvFileReader<MatchData> {
  constructor(public filename: string) {
    super();
  }

  // Convert them to
  // [Date, string, string, number, number, MatchResult, string]
  public mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      // Override typescript default behavior, we are telling that, row[5] should one of the values from MatchResult
      // Now row[5] can only be "H", "A", "D"
      row[5] as MatchResult,
      row[6],
    ];
  }
}
