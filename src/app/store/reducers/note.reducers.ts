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
        notes: [...action.payload],
      };

    case ENotesActions.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case ENotesActions.DELETE_NOTE:
      return {
        ...state,
        notes: [...state.notes.filter((n) => n.id !== action.payload.id)],
      };

    case ENotesActions.UPDATE_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes.map((n) => {
            if (n.id === action.payload.id) {
              return action.payload;
            }
            return n;
          }),
        ],
      };

    default:
      return state;
  }
};
