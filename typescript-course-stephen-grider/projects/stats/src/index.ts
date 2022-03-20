// CLASSES TO IMPORT THE DATA
import { MatchReader } from './MatchReader';
// CLASSES TO RUN ANALYSIS ON DATA
import { Summary } from './Summary';

// GET THE DATA OUT OF CSV FILE
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// GET THE ANALYSIS FROM THE DATA THAT WAS IMPORTED THROUGH MATCH_READER
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
