import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly router: Router = inject(Router)

  constructor() { }

  isConnected(): boolean{
    
    return true
  }

  connect(user: User){
    //todo vérifier si user existe en BDD
  
    // si oui : créer un token en session storage

  }

  disconnect() {
   

    this.router.navigate(['/'])
  }
}
