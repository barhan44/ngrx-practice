import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { RootState } from '../../store/state/root.state';
import { Note } from './model/note.class';
import { LoadNotes } from '../../store/actions/note.actions';

export const BASE_URL = 'http://localhost:3000/';

@Injectable()
export class NoteService {

  constructor(
    private http: HttpClient,
    private store: Store<RootState>
  ) {
  }

  loadNotes(): void {
    this.http.get<Note[]>(BASE_URL + 'notes')
      .subscribe(notes => {
        this.store.dispatch(new LoadNotes(notes));
      });
  }
}
