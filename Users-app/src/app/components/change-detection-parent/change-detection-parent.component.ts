import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-parent',
  templateUrl: './change-detection-parent.component.html',
  styleUrls: ['./change-detection-parent.component.css']
})
export class ChangeDetectionParentComponent  {

  
  user = {
    name : "Foo"
  };

  fruits = [
    {id : 1,name : "apple"},
    {id : 2,name : "banana"},
    {id : 3,name : "orange"},


];

  onReferencechange(){
    this.user ={  //change reference - mutable change
      name : "Bar"
    } 

  }
  onValuechange(){
      this.user.name = "Baz"; //change value - immutable change
  }

  onAddItem(){
    this.fruits = [
      {id : 1,name : "apple"},
      {id : 2,name : "banana"},
      {id : 3,name : "orange"},
      {id: 4,name:"Kiwi"}
  
  
  ];


  }

  trackBy(id,el){
      return el.id;
  }
  


}
