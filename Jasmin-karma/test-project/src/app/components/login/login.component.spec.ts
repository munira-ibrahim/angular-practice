import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import {FormsModule} from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports :[FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   //1. Component load without carashing
   it('should create', () => {
    expect(component).toBeTruthy();
  });

  //2. Testing component properites
  it('should uid contains empty as a default value', () => {
    let str = component.uid;
    expect(str).toBe("");
  });

  //3. Testing component properites
  it('should result contains empty as a default value', () => {
    let str = component.result;
    expect(str).toBe("");
  });

 //4. Testing component methods
 it('should generate correct message for invalid user id or password', () => {
    component.uid =  "hello";
    component.pwd =  "hello123";
    component.loginButton_click();
    let str  = component.result;
    expect(str).toBe("Invalid user id or password");
});


//5. Testing component methods
 it('should generate welcome message for valid user id and password', () => {
  component.uid =  "admin";
  component.pwd =  "admin123";
  component.loginButton_click();
  let str  = component.result;
  expect(str).toBe("Welcome to Admin");
});

//6. Testing Component template ---> Legend tag
it('should generate "User Login" in legend tag', () => {
  const tagobj = fixture.nativeElement.querySelector("legend");
  let str  = tagobj.textContent;
  expect(str).toBe("User Login");
});

//7. Testing Component template ---> paragraph tag
it('should generate paragraph empty', () => {
  const tagobj = fixture.nativeElement.querySelector("p");
  let str  = tagobj.textContent;
  expect(str).toBe("");
});

//7. Testing Component template ---> input field -uid
it('should set the value for user Id textbox', () => {
  const inputobj = fixture.nativeElement.querySelector("input");
  inputobj.value = "Scott";
  inputobj.dispatchEvent(new Event("input"));
  let str  = component.uid;
  expect(str).toBe("Scott");
});

it('should generate invalid message when user click the button without textbox value', () => {
  const inputobj = fixture.nativeElement.querySelectorAll("input");
  inputobj[2].dispatchEvent(new Event("click"));
  
  fixture.detectChanges();
  const tagobj = fixture.nativeElement.querySelector("p");
  
  let str  = tagobj.textContent;
  expect(str).toBe("Invalid user id or password");
  
  
});

it('should do something….', (done: any) => {

  expect(true).toBe(false);

});



});
