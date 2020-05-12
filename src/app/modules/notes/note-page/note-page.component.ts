import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { INoteState } from '../../../store/state/note.state';
import { RootState } from '../../../store/state/root.state';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss'],
})
export class NotePageComponent implements OnInit {
  public noteState$: Observable<INoteState>;

  constructor(
    private store: Store<RootState>,
    private noteService: NoteService
  ) {
    this.noteService.loadNotes();
  }

  ngOnInit(): void {
    this.noteState$ = this.store.select('notes');
  }
}
