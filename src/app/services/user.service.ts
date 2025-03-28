import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { ResponseApi } from '../models/response';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly storage = inject(StorageService)

  constructor() { }

  create(user: User): ResponseApi {
    if (user.id && this.getUserById(user.id).data === null){
      return {
        code: '666',
        message : 'Cet utilisateur existe déjà en base.'
      }
    }
    const users = this.getUsers().data
    user.id = users!.length + 1
    users!.push(user)
    this.setUsers(users!)

    return {
      code: '200',
      message : 'Cet utilisateur a été créé en base.'
    }
  }

  setUsers(users : Array<User>) : void {
    this.storage.setLocal("users", JSON.stringify(users))
  }

  getUsers() : ResponseApi<Array<User>> {
    const usersString = this.storage.getLocal("users")
    return usersString
    ? {
      code: '200',
      message : 'Les utilisateurs ont été récupérés depuis la base.',
      data : JSON.parse(usersString) as Array<User>
    }
    : {
      code: '666',
      message : "Il n'y a aucun utilisateur en base : un tableau vide est envoyé.",
      data : Array<User>()
    }
  }

  getUserById(id: number) : ResponseApi<User | null>{
    const user : Array<User> = this.getUsers().data!.filter((user) => user.id === id)

    return user.length > 0 
    ? {
      code: '200',
      message : "L'utilisateur a été récupéré depuis la base.",
      data : user[0]
    } 
    : {
      code: '666',
      message : "Cet id n'existe pas en base.",
      data: null
    } 
  }
}
