import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {v4} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = null;

  constructor(private router : Router) { }

  register(username:string,password:string){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.setItem('userInfo', JSON.stringify({ username, password }));
        resolve({message : "SUCCESS"})
      },1500)
    });
  }

  onLogin(email: string, Password: string) {
        
    return new Observable((observer) => {
      const user = localStorage.getItem('userInfo');
      if (user) {
        const userObj = JSON.parse(user);
        console.log("Local Storage",userObj.username);
        
        //Destructuring : username is assigned to userEmail
        const { username:userEmail,password:userPassword } = userObj;
        
        
        if (email === userEmail && Password === userPassword) {
          console.log("email & password same");
          this.token = v4()
          console.log("TOKEN - ", this.token)
          observer.next({ message: 'SUCCESS' });
        }
      } else {
        console.log("email & password Not same");
        observer.error(new Error('User does not exist'));
      }
    });
  }

  isAuthenticated(){
      return this.token != null;
  }

  OnLogout(){
    localStorage.clear();
    this.token = null;
  }

}
