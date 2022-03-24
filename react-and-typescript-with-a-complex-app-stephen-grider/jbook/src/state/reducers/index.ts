import { combineReducers } from 'redux';
// Reducers
import cellsReducer from './cellsReducer';

const reducers = combineReducers({
  cells: cellsReducer,
});

export type RootState = ReturnType<typeof reducers>;
export default reducers;
