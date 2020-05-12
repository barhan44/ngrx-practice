import { Note } from '../../modules/notes/model/note.class';

export interface INoteState {
  notes: Note[];
}

export const initialNoteState: INoteState = {
  notes: [],
};
