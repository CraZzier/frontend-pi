import { FormGroup, ValidatorFn,ValidationErrors,AbstractControl} from '@angular/forms';

export const passwordCheck: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const pass1 = control.get('password');
    const pass2 = control.get('passwordR')
    const det = (pass2.value==pass1.value);
    if ( det==true ){
        return null;
    }else{
        return {passwordCheck: true};
    }
  };
 