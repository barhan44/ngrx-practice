import { Component, Input } from '@angular/core';
import { Note } from '../model/note.class';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {

  @Input() note: Note;

  constructor(
    private noteService: NoteService
  ) {
  }

  onNoteDelete(): void {
    this.noteService.deleteNote(this.note);
  }
}
