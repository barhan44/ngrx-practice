import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { NotePageComponent } from './note-page/note-page.component';
import { NoteService } from './note.service';

@NgModule({
  declarations: [NoteFormComponent, NoteItemComponent, NotePageComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NoteService],
})
export class NotesModule {}
