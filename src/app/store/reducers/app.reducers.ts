import { ActionReducerMap } from '@ngrx/store';
import { RootState } from '../state/root.state';
import { noteReducer } from './note.reducers';

export const appReducers: ActionReducerMap<RootState, any> = {
  notes: noteReducer
};
