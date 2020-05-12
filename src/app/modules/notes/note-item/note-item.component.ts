import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Note } from '../../../store/model/note.class';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent implements OnInit {
  @Input() note: Note;

  noteEditForm: FormGroup;

  editMode = false;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.initEditForm();
  }

  private initEditForm() {
    this.noteEditForm = new FormGroup({
      title: new FormControl(this.note.title, Validators.required),
      text: new FormControl(this.note.text, Validators.required),
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
