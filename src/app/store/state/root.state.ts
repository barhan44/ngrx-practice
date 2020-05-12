import { initialNoteState, INoteState } from './note.state';
import { initialTodoState, ITodoState } from './todo.state';

export interface RootState {
  notes: INoteState;
  todos: ITodoState;
}

export const initialRootState: RootState = {
  notes: initialNoteState,
  todos: initialTodoState,
};

export function getInitialRootState() {
  return initialRootState;
}
