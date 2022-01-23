import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent{
  @Input()
  user : User;

  @Output()
  childEvent = new EventEmitter<any>()

  onBtnClick(){
    this.childEvent.emit(this.user);
  }

 
}