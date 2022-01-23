import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  @Input() txtButton : string;

  @Output() btnClick = new EventEmitter<any>()

  onBtnClick(event: {target : HTMLButtonElement}){
    this.btnClick.emit(event)
  }

}
