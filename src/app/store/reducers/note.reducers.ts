import { ENotesActions, NotesActions } from '../actions/note.actions';
import { initialNoteState, INoteState } from '../state/note.state';

export const noteReducer = (
  state = initialNoteState,
  action: NotesActions
): INoteState => {
  switch (action.type) {
    case ENotesActions.LOAD_NOTES:
      return {
        ...state,
        notes: [...action.payload]
      };

    default:
      return state;
  }
};
