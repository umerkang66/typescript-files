import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

import { CsvFileReader } from './CsvFileReader';

export interface DataReader {
  read(): void;
  data: string[][];
}

// THIS IMPLEMENTS "COMPOSITION"
export class MatchReader {
  public matches: MatchData[] = [];

  // reader should be the instance of any DataReader satisfying class, we have only one i.e. CsvFileReader
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    // Convert them to
    // [Date, string, string, number, number, MatchResult, string]

    // After read() method is called on reader, the first iteration result will be saved as reader.data

    // Here this.reader.data is the first map of the string[][]
    this.matches = this.reader.data.map((row: string[]): MatchData => {
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
    });
  }

  public static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }
}
