import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepartmentComponent } from './department.component';

describe('DepartmentComponent', () => {
  let component: DepartmentComponent;
  let fixture: ComponentFixture<DepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentComponent ],
      imports:[FormsModule,ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //1. department default array should contain 3 object
  it('department default array should contain 3 object',() => {
    const arraylenghth = component.departments.length;
    expect(arraylenghth).toBe(3);
  });

  //2.Default values  of properties :        deptno - 0 ,  dname  - "", loc : ""
  // it('should generate Default values  of properties empty',() =>{

  //   const inputarray = fixture.nativeElement.querySelectorAll('input');
  //   let id = inputarray[0].value;
  //   let name = inputarray[1].value;
  //   let location = inputarray[2].value;
  //   expect(id).toBe("");
  //   expect(name).toBe("");
  //   expect(location).toBe("");

  // });

  // 3. Default Value Empty
  it('All input Field Should Contain Default Value as Empty', () => {
    
    let loginForm =  component.detail;
    const loginFormValue = {
      id : '',
      name:'',
      location : ''
    }
    expect(loginForm.value).toEqual(loginFormValue)
    //let str = ;
    //expect(str).toBe("");
});

//4. Check if Form is valid when validation are fullfilled
it('Check if Form is valid when validation are fullfilled',()=>{
    const deptid : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#dept')
    .querySelectorAll('input')[0];
    const deptname : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#dept')
    .querySelectorAll('input')[1];
    const deptlocation : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#dept')
    .querySelectorAll('input')[2];
    
    


    deptid.value = '101';
    deptname.value = 'abc';
    deptlocation.value = 'xyz';
    deptid.dispatchEvent(new Event('input'));
    deptname.dispatchEvent(new Event('input'));
    deptlocation.dispatchEvent(new Event('input'));
    
    const isLoginFormValid = component.detail.valid;
    console.log(isLoginFormValid);
    //console.log(deptlocation.value);
    fixture.whenStable().then(()=>{
      expect(isLoginFormValid).toBeTruthy();
    });
    
});


  // 4. By default table should four rows (1 header + 3 datarows)
  
  // 6. Enter textbox values and check the component properties
  // 7. Add button click --- by provide textbox values 
  //     verify --- no. of rows in table should be five.



});
