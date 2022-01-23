import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.css']
})
export class NotesItemComponent  {

  @Input()
  notes : string;

  @Output()
  SelectedNote = new EventEmitter<string>();

  OnNoteSelect(note : string){
    this.SelectedNote.emit(note);
  }

}
