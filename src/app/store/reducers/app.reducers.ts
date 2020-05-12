import { ActionReducerMap } from '@ngrx/store';

import { RootState } from '../state/root.state';
import { noteReducer } from './note.reducers';
import { todoReducer } from './todo.reducers';

export const appReducers: ActionReducerMap<RootState, any> = {
  notes: noteReducer,
  todos: todoReducer
};
