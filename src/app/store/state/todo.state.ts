import { Todo } from '../model/todo.class';

export interface ITodoState {
  todos: Todo[];
}

export const initialTodoState: ITodoState = {
  todos: [],
};
