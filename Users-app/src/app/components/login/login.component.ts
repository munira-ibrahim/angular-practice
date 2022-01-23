import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router : Router,private auth :AuthService){}

  OnReset(loginForm : NgForm){
    loginForm.reset();
  }
  
  
  onSubmit(loginForm : NgForm){
    
    console.log(loginForm);
    const { email, password } = loginForm.value;
    this.auth.onLogin(email,password)
    .subscribe((response : any) => {
      if(response.message === "SUCCESS"){
        console.log("successfully Login")
        this.router.navigate(['/users'])
      }
    })
    
  }

}
