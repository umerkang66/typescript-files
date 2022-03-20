import fs from 'fs';
import { DataReader } from './MatchReader';

export class CsvFileReader implements DataReader {
  public data: string[][] = [];

  constructor(public filename: string) {}

  public read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        // Return a string to it
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
