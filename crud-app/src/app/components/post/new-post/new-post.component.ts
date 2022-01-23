import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Posts } from 'src/app/model/post';
import {v4} from 'uuid';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  
  @Output() PostEvent = new EventEmitter<Posts>()

  @Output() cancelFormEvent = new EventEmitter<any>()

  onCancelForm(){
    this.cancelFormEvent.emit();
  }
  
  constructor() { }

  onAddNewPost(event : Event,postForm : NgForm){
    event.preventDefault();
    const post :Posts=
    {
        title : postForm.value.title,
        body : postForm.value.body,
        id : v4(),
        publish: false

    }
    this.PostEvent.emit(post);

  }

  ngOnInit(): void {
  }

}
