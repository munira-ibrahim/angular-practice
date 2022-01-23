import { Component,Input,OnInit} from '@angular/core';
import { Comments } from 'src/app/model/comment.model';
import { User } from 'src/app/model/user.model';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent{
  @Input()
  user : User;
  counter : number;

  constructor(private counterService : CounterService){
     
  }

  getCounter(){
    return this.counterService.getCounter();
  }

  tab :number = 0;

  changeUserVotes(event : {target : HTMLInputElement}){
    this.user.votes = Number(event.target.value)
  }

  AddNewComment(comment : Comments){
      this.user.comments.push(comment)
      this.tab = 1;
  }
  
}
