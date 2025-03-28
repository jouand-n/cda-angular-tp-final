import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormService } from '../../services/form.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private readonly formService : FormService = inject(FormService)
  private readonly router : Router = inject(Router)
  private readonly authService : AuthService = inject(AuthService)
  errorMessage: string|null = null
  
  loginForm : FormGroup = new FormGroup({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required]),
  }, 
  // {validators : passwordsValidator}
  )

  onSubmit() : void {
    
    if(this.loginForm.valid){
      const user : User = {
        email : this.formService.value(this.loginForm, 'email'),
        password : this.formService.value(this.loginForm, 'password')
      }

      const response = this.authService.connect(user)
       
      if (response.code === '200') {
        this.router.navigate(['/'])
      }

      if (response.code === '666'){
        this.errorMessage = response.message
      }
    }
  }
}
