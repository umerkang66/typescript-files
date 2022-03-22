import { combineReducers } from 'redux';
import { repositoriesReducer } from './repositoriesReducer';

export const reducers = combineReducers({
  repositories: repositoriesReducer,
});

// Give us back the type that whatever reducers function returns
export type RootState = ReturnType<typeof reducers>;
