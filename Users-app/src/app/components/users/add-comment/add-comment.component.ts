import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Comments } from 'src/app/model/comment.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {

  comment : Comments = {star : 0,body:"",author:""}

  @Output()
  AddCommentEvent = new EventEmitter<Comments>();

  onAddComment(){
    console.log(this.comment);
    this.AddCommentEvent.emit(this.comment);
  }
  
}
