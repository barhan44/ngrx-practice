import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NotePageComponent } from './note-page/note-page.component';
import {NoteService} from './note.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [NoteFormComponent, NoteListComponent, NotePageComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    HttpClientModule
  ],
  providers: [
    NoteService
  ]
})
export class NotesModule { }
