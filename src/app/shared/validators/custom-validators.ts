import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidators {
  static phoneNumberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value ){
      return null;
    }
    if (value.startsWith('+') && value.lastIndexOf('+') == 0) {
      if (value.length == 12) {
        return null;
      }
    } else if (value.length == 11 && value.indexOf('+') == -1) {
      return null;
    }

    return {
      phone: {
        value: control.value
      },
    }
  }
}
