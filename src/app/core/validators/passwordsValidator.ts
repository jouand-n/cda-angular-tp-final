
import { ValidatorFn, ValidationErrors, AbstractControl} from "@angular/forms"

export const passwordsValidator : ValidatorFn = (
    control: AbstractControl,
): ValidationErrors | null => {
      const password = control.get('password')
      const confirmPassword = control.get('confirmPassword')

      return password && confirmPassword && password.value !== confirmPassword.value ?  {notEqualsPassword : true} : null
}