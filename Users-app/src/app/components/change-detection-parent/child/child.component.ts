import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush // only check for mutable changes in application
})
export class ChildComponent implements OnInit {

  @Input()
  user :any
  // user  = {   //Mutable change
  //   name : "Bar"
  // }

  //user.name ="Baz";

  
  constructor() { }

  ngOnInit(): void {
  }

}
