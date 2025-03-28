import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormService } from '../../services/form.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { passwordsValidator } from '../../core/validators/passwordsValidator';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  
  private readonly formService : FormService = inject(FormService)
  private readonly userService : UserService = inject(UserService)
  private readonly router : Router = inject(Router)
  
  registerForm : FormGroup = new FormGroup({
    pseudo: new FormControl ('', [Validators.required]),
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl ('', [Validators.required, Validators.minLength(8)])
  }, 
  {validators : passwordsValidator})

  onSubmit() : void {
    
    if(this.registerForm.valid){
      const user : User = {
        pseudo: this.formService.value(this.registerForm, 'pseudo'),
        email : this.formService.value(this.registerForm, 'email'),
        password : this.formService.value(this.registerForm, 'password')
      }

       const response = this.userService.create(user)
      console.log(response)
      if (response.code === '200') {
        this.router.navigate(['/'])
      }
    }
  }
}
