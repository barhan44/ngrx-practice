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

    case ETodosActions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case ETodosActions.UPDATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((t) => {
            if (t.id === action.payload.id) {
              return action.payload;
            }
            return t;
          }),
        ],
      };

    default:
      return state;
  }
};
