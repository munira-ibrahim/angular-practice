import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  notes: Array<string> = ["Insurance", "Shopping", "Planting", "Grocery"];

  SelectedNote: { id: number, text: string }
  showNoteEditComp : boolean = false;

  display : boolean;

  OnNoteSelected(note: string) {
    const index = this.notes.findIndex(n => n.toUpperCase() === note.toUpperCase())
    this.SelectedNote = { id: index, text: note };
    console.log("SelectedNote:", this.SelectedNote);
    this.showNoteEditComp = true;
  }

  EditNote(editNote: { id: number, text: string }) {

    console.log("Editted Note",editNote);
    this.notes[editNote.id] = editNote.text;
    this.showNoteEditComp = false;

  }
  DeleteNote(deleteNote : {id:number,text : string}){
      console.log("Deleted Note:",deleteNote);
      const position = this.notes.findIndex(n => n.toUpperCase() === deleteNote.text.toUpperCase())
      this.notes.splice(position, 1);
      this.showNoteEditComp = false;
  }

  DisplayForm(){
    this.display = true;
    console.log("Card Is Clicked");
  }

  AddNote(note : string){
     this.notes.push(note);
  }

}
