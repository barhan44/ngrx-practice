import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { RootState } from '../../store/state/root.state';
import { Note } from './model/note.class';
import { AddNote, DeleteNote, LoadNotes } from '../../store/actions/note.actions';

export const BASE_URL = 'http://localhost:3000/';

@Injectable()
export class NoteService {

  constructor(
    private http: HttpClient,
    private store: Store<RootState>
  ) {
  }

  public loadNotes(): void {
    this.http.get<Note[]>(BASE_URL + 'notes')
      .subscribe(notes => {
        this.store.dispatch(new LoadNotes(notes));
      });
  }

  public addNote(note: Note) {
    this.http.post<Note>(BASE_URL + 'notes', note)
      .subscribe(resNote => {
        this.store.dispatch(new AddNote(resNote));
      });
  }

  public deleteNote(note: Note) {
    this.http.delete<Note>(BASE_URL + 'notes/' + note.id)
      .subscribe(() => {
        this.store.dispatch(new DeleteNote(note));
      });
  }
}
