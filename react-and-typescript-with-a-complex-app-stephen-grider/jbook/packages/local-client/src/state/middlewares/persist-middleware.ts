import { Dispatch } from 'redux';
import { Actions } from '../actions';
import { ActionType } from '../action-types';
// Don't need to use the hook, because we will manually dispatch (pass the action through store loop) it
import { saveCells } from '../action-creators';
import { RootState } from '../reducers';

interface StoreWithDispatch {
  dispatch: Dispatch<Actions>;
  getState: () => RootState;
}

export const persistMiddleware = ({
  dispatch,
  getState,
}: StoreWithDispatch) => {
  let timer: NodeJS.Timer;

  return (next: (action: Actions) => Actions) => {
    return (action: Actions) => {
      // We always want to carry on action
      // We will not modify or delay any kind of action, we will let every action run
      next(action);

      // But if there are some specific types of actions, we want to dispatch another action
      if (
        [
          ActionType.MOVE_CELL,
          ActionType.UPDATE_CELL,
          ActionType.DELETE_CELL,
          ActionType.INSERT_CELL_AFTER,
        ].includes(action.type)
      ) {
        if (timer) {
          clearTimeout(timer);
        }
        // This is because of redux thunk, we wired up saveCells according to thunk, so we have to provide same arguments here that redux thunk provides
        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
        }, 500);
      }
    };
  };
};
