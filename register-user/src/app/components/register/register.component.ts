import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupName, Validators,
  ReactiveFormsModule,ValidatorFn } from '@angular/forms';

import { debounceTime} from "rxjs/operators";
import { CustomValidator } from 'src/app/Validator/custom-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  title1: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  dob: FormControl;
  role: FormControl;
  EmpId: FormControl;
  CountryCode: FormControl;
  number: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  matchingPassword : boolean ;
  

  countryCodes = [
    {country : 'AFG',code : 93}, 
    {country : 'ALB',code : 355}, 
    {country : 'AUS',code : 61}, 
    {country : 'EGY',code : 20},
    {country : 'IND',code : 91},
    {country : 'KWT',code : 965},
    {country : 'NZL',code : 64},
    {country : 'PAK',code : 92}
  ];
  titles = ['Mr', 'Miss', 'Mrs'];

  roles = ['Physician','Nurse','Admin'];
  
  constructor() { }
  

  
  createFormControls() {

    this.title1 = new FormControl('Miss');
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.minLength(2)]);
    this.lastName = new FormControl('', [
      Validators.required,
      Validators.minLength(2)]);

    this.email = new FormControl('', [
       Validators.required,
       Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")
      
    ]);
    this.dob = new FormControl();
    this.role = new FormControl(this.roles[1]);
    this.EmpId = new FormControl();
    this.CountryCode = new FormControl(this.countryCodes[4].code);
    this.number = new FormControl();
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
     
    ]);

    this.confirmPassword = new FormControl("",[
      Validators.required,
      Validators.minLength(8),
      CustomValidator.passwordMatch
      
    ]);

    let s2 : any = "abc";
    console.log(s2.toUpperCase())

   
    


  }

  // confirmEquals(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null =>  
  //       control.value?.toLowerCase() === this.passwordValue.toLowerCase() 
  //           ? null : {noMatch: true};
  // }

  // get passwordValue() {
  //   return this.password.value;
  // }


  

  createForm() {
    this.register = new FormGroup({

      title1: this.title1,


      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,

      dob: this.dob,
      role: this.role,
      EmpId: this.EmpId,

      contactNo: new FormGroup({
        CountryCode: this.CountryCode,
        number: this.number
      }),



      password: this.password,
      confirmPassword: this.confirmPassword


    })
  }

  ngOnInit() {
    
    this.createFormControls();
    this.createForm();
    console.log()
    
  }

  OnSubmit(){
    console.log("Form Submitted Successfully",this.register.value);

    //console.log("Form Submitted Successfully",this.register);
    this.register.reset();
  }

  OnReset(){
    this.register.reset(); 
  }
  
  


}


