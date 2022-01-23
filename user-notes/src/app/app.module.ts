import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesItemComponent } from './components/notes/notes-item/notes-item.component';
import { NotesEditComponent } from './components/notes/notes-edit/notes-edit.component';
import { FormsModule } from '@angular/forms';
import { AddNoteComponent } from './components/add-note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesItemComponent,
    NotesEditComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
