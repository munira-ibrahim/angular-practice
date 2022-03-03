import { stringify } from '@angular/compiler/src/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit  {
  

// @Output() department = new EventEmitter();

 detail : FormGroup; 
 id : FormControl;
 name : FormControl;
 location : FormControl;


 ngOnInit(): void {
  
  this.detail = new FormGroup({
    id : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    location : new FormControl('',[Validators.required]),
  })
     
  
}

 departments = [{
    id : 101,
    name:"HR",
    location : "Bangluru"
 },
 {
  id : 102,
  name:"Admin",
  location : "Pune"
},
{
  id : 103,
  name:"Finance",
  location : "Mumbai"
}
];

onAddDepartment(){
  console.log(this.detail.value)
  //dept : {id : number} = this.detail.value
  // const id= department.controls.id.value;
  // const name = department.controls.name.value;
  // const location = department.controls.location.value;
  let dept : {id  :number,name : string,location:string} = this.detail.value;

  this.departments.push(dept);
}


}
