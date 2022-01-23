import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  

  registrationForm : FormGroup;

  constructor(private fb : FormBuilder,
    private authService:AuthService,private router : Router) {
    this.registrationForm = this.fb.group({
      username : this.username,
      password : this.password,
      books : new FormArray([])
      
    })
  }

  get books(){
    return this.registrationForm.get('books') as FormArray;
  }

  addbooks(){
    this.books.push(new FormControl(''))
  }

  courses = new FormArray([]); // dynamically add form control
  hobbies = new FormArray([]);   //dynamically add form group(multiple form control)

  addCourse(){
    this.courses.push(new FormControl(''));
  }

  addHobby(){
    const hobby = new FormGroup({
      hobbyname : new FormControl(''),
      frequency : new FormControl('')
    })
    this.hobbies.push(hobby);
    console.log(hobby);
  }

  removeCourse(i: number){
    this.courses.removeAt(i);
  }

  onRegister(){
    console.log(this.registrationForm);
    const { username, password } = this.registrationForm.value;
    this.authService.register(username, password)
      .then((response : any) => {
        if(response.message === "SUCCESS"){
          this.router.navigate(['/login'])
        }
      });

  }

  ngOnInit(): void {
  }

  shouldLeave(){
    return confirm("Are you sure to leave this page?") ? true : false;
  }

}
