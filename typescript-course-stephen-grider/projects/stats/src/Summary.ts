import { MatchData } from './MatchData';

// Classes to analyze and output the data
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  public buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }

  // This will only runs WinsAnalysis, with HtmlReports, no other Analysis, and no other Reports
  public static winsAnalysisWithHtmlReport(team: string): Summary {
    // We can also add HtmlReport

    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }
}
