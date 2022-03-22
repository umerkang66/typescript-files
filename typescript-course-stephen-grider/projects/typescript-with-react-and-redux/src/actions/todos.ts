import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// To dispatch we can provide an generic property that can describe this current action
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  // This will be the id of the todo
  payload: number;
}

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await axios.get<Todo[]>(url);

  dispatch<FetchTodosAction>({
    type: ActionTypes.fetchTodos,
    payload: res.data,
  });
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return { type: ActionTypes.deleteTodo, payload: id };
};
