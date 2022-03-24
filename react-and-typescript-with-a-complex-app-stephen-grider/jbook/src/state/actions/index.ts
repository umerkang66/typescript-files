import { ActionType } from '../action-types';
import { CellTypes } from '../CellInterface';

export type Direction = 'up' | 'down';
export interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    // Id means which cell to move
    id: string;
    // Move it up or down
    direction: Direction;
  };
}

export interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  // It should have just the id of the cell that user want to delete
  payload: string;
}

export interface InsertCellBeforeAction {
  type: ActionType.INSERT_CELL_BEFORE;
  payload: {
    // To which cell we want to insert before
    // If it is null, add it to the end of state.order
    id: string | null;
    // Which cell to insert "code" or "text"
    type: CellTypes;
  };
}

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    // Which cell to update (it can be either code or text)
    id: string;
    // Content to be updated (code or text)
    content: string;
  };
}

export type Actions =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellBeforeAction
  | UpdateCellAction;
