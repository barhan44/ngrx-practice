import { initialNoteState, INoteState } from "./note.state";

export interface RootState {
  notes: INoteState
}

export const initialRootState: RootState = {
  notes: initialNoteState
}

export function getInitialRootState() {
  return initialRootState;
}
