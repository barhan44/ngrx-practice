import { Action } from "@ngrx/store";

export enum ENotesActions {
  LOAD_NOTES= 'LOAD_NOTES'
}

export class LoadNotes implements Action {
  public readonly type = ENotesActions.LOAD_NOTES;
}

export type NotesActions = LoadNotes;
