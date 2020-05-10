import { ENotesActions, NotesActions } from "../actions/note.actions";
import { Note } from "../../modules/notes/model/note.class";
import { initialNoteState, INoteState } from "../state/note.state";

export const noteReducer = (
  state = initialNoteState,
  action: NotesActions
): INoteState => {
  switch (action.type) {
    case ENotesActions.LOAD_NOTES:
      return {
        ...state,
        notes: [new Note('Title', 'Text', 1)]
      }

    default:
      return state;
  }
}
