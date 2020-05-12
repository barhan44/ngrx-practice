import { initialTodoState, ITodoState } from '../state/todo.state';
import { ETodosActions, TodosActions } from '../actions/todo.actions';

export const todoReducer = (
  state = initialTodoState,
  action: TodosActions
): ITodoState => {
  switch (action.type) {
    case ETodosActions.LOAD_TODOS:
      return {
        ...state,
        todos: [...action.payload],
      };

    default:
      return state;
  }
};
