import { Action } from '../actions';
import { ActionType } from '../action-types';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

export const repositoriesReducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { ...state, loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { ...state, loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
