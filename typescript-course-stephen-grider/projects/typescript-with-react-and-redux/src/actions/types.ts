import { FetchTodosAction, DeleteTodoAction } from './todos';

// If we don't provide values, typescript will assign 0 to the first, 1 to second and so on
export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
