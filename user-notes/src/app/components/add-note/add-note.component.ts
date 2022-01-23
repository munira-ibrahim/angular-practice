import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {

  note : string

  @Output()
  addedNote = new EventEmitter();
  
  AddNote(){
    this.addedNote.emit(this.note);
    console.log("Added Note :",this.note);
  }

}
