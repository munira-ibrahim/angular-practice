import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent{

  @Input()
  note : {id : number,text : string}

  @Output()
  OnEditClick = new EventEmitter();

  @Output()
  OnDeleteClick = new EventEmitter();

  OnEditNote(){
    this.OnEditClick.emit(this.note);
    console.log("Note to be Editted:",this.note)
  }

  OnDeleteNote(){
    this.OnDeleteClick.emit(this.note)
    console.log("Note to be Deleted:",this.note)
  }
  
  
}
