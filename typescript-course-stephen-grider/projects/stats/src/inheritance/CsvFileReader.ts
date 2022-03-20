import fs from 'fs';

export abstract class CsvFileReader<T> {
  public abstract filename: string;
  public data: T[] = [];
  public abstract mapRow(row: string[]): T;

  public read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        // Return a string to it
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
