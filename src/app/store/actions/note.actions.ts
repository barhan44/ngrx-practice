import { Action } from '@ngrx/store';

import { Note } from '../../modules/notes/model/note.class';

export enum ENotesActions {
  LOAD_NOTES = 'LOAD_NOTES',
  ADD_NOTE = 'ADD_NOTE',
  DELETE_NOTE = 'DELETE_NOTE',
  UPDATE_NOTE = 'UPDATE_NOTE',
}

export class LoadNotes implements Action {
  public readonly type = ENotesActions.LOAD_NOTES;

  constructor(public payload: Note[]) {}
}

export class AddNote implements Action {
  public readonly type = ENotesActions.ADD_NOTE;

  constructor(public payload: Note) {}
}

export class DeleteNote implements Action {
  public readonly type = ENotesActions.DELETE_NOTE;

  constructor(public payload: Note) {}
}

export class UpdateNote implements Action {
  public readonly type = ENotesActions.UPDATE_NOTE;

  constructor(public payload: Note) {}
}

export type NotesActions = LoadNotes | AddNote | DeleteNote | UpdateNote;
