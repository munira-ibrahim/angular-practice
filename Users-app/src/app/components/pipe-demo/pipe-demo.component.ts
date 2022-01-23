import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

  Message : string = "Hello there!!";
 
  todoCollection  = [
    {label : 'Shopping',status : 'pending' },
    {label :'Grocery',status : 'completed'},
    {label :'Bill Payment',status : 'pending'}
  ];

  filterStatus : string = '';

  onAddNewTodo(){
    this.todoCollection.push({label : "New Item", status : "pending"})
    console.log(this.filterStatus);
  }

  // promise = new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //         resolve("Hey There!! You waited")
  //     }, 3000);
  // } )

}
