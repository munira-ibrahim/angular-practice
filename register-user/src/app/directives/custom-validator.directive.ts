import { Directive, Input } from '@angular/core';
import { AbstractControl ,Validator} from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]'
})
export class CustomValidatorDirective implements Validator {

  @Input() appCustomValidator : string;
  validate(control : AbstractControl):{[key : string]: any} | null{
    const controlTocompare = control.parent.get(this.appCustomValidator)
    if(controlTocompare && controlTocompare.value !== control.value){
      return {'notEqual' : true}
    }
    return null
  }

}
