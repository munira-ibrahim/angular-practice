import { AbstractControl,Validators } from "@angular/forms";

export class CustomValidator extends Validators{
    

    static passwordMatch(control : AbstractControl){
       
        //console.log(control.value)
        // return (control: AbstractControl): { [key: string]: any } | null =>  
        if(control.parent){
            return control.value === control.parent.get('password').value 
                ? null : {noMatch: true};
        }
            

    }
    
    // return (control: AbstractControl): { [key: string]: any } | null =>  
    //     control.value?.toLowerCase() === this.passwordValue.toLowerCase() 
    //         ? null : {noMatch: true};
    
}