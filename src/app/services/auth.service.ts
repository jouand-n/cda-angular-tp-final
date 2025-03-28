import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { inject } from '@angular/core';
import { ResponseApi } from '../models/response';
import { UserService } from './user.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly router: Router = inject(Router)
  private readonly userService : UserService = inject(UserService)
  private readonly storageService : StorageService = inject(StorageService)

  constructor() { }

  connect(user: User) : ResponseApi {
    let users : Array<User> = this.userService.getUsers().data!

    users = users.filter(item => ((item.email === user. email) && (item.password === user.password)))

    if(users.length>0){
      this.storageService.setSession("user", JSON.stringify(user))

      return {
        code:'200',
        message: `${user.pseudo} est connecté-e`,
      }
    }
   
    return {
      code:'666',
      message: "Identifiants invalides",
    }
  }

  disconnect() {
    this.storageService.clearSession()
    this.router.navigate(['/'])
  }

  isConnected(): boolean{
    const user : string | null = this.storageService.getSession("user")
    return !!user
  }
}
