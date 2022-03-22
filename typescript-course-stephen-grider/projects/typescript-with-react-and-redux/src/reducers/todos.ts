import { Todo, Action, ActionTypes } from '../actions';

type todoState = Todo[];

export const todosReducer = (
  state: todoState = [],
  action: Action
): todoState => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return deleteTodo(state, action.payload);
    default:
      return state;
  }
};

// THIS REDUCER's UTILS
function deleteTodo(state: todoState, id: number): todoState {
  return state.filter(todo => todo.id !== id);
}
