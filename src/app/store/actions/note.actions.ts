import { Action } from '@ngrx/store';
import { Note } from '../../modules/notes/model/note.class';

export enum ENotesActions {
  LOAD_NOTES = 'LOAD_NOTES',
  ADD_NOTE = 'ADD_NOTE'
}

export class LoadNotes implements Action {
  public readonly type = ENotesActions.LOAD_NOTES;

  constructor(
    public payload: Note[]
  ) {
  }
}

export class AddNote implements Action {
  public readonly type = ENotesActions.ADD_NOTE;

  constructor(
    public payload: Note
  ) {
  }
}

export type NotesActions = LoadNotes | AddNote;
