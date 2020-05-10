import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from '../model/note.class';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent {

  noteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required)
  });

  constructor(
    private noteService: NoteService
  ) {
  }

  onAddNote(): void {
    const noteTitle = this.noteForm.get('title')?.value;
    const noteText = this.noteForm.get('text')?.value;
    const note = new Note(noteTitle, noteText);
    this.noteService.addNote(note);
    this.noteForm.reset();
  }
}
