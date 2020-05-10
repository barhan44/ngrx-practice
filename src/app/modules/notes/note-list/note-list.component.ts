import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../model/note.class';
import { NoteService } from '../note.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  @Input() note: Note;

  noteEditForm: FormGroup;

  editMode = false;

  constructor(
    private noteService: NoteService
  ) {
  }

  ngOnInit(): void {
    this.initEditForm();
  }

  private initEditForm() {
    this.noteEditForm = new FormGroup({
      title: new FormControl(this.note.title, Validators.required),
      text: new FormControl(this.note.text, Validators.required)
    });
  }

  onNoteDelete(): void {
    this.noteService.deleteNote(this.note);
  }

  onNoteEdit() {
    this.editMode = true;
  }

  onCancelEdit() {
    this.editMode = false;
    this.initEditForm();
  }

  onSaveEdit() {
    const noteTitle = this.noteEditForm.get('title')?.value;
    const noteText = this.noteEditForm.get('text')?.value;
    const note = new Note(noteTitle, noteText, this.note.id);
    this.noteService.updateNote(note);
  }
}
