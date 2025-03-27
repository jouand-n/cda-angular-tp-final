import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly storage = inject(Storage)

  constructor() { }

  create(user: User): boolean {
  }
}
