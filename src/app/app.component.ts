import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { StorageService } from './services/storage.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string | null = null
  userName : string | null = null
  
  readonly authService : AuthService = inject(AuthService)
  private readonly storageService : StorageService = inject(StorageService)
  private user : string|User|null = null

  ngOnInit(){
    this.user = this.storageService.getSession("user")
    if ( typeof(this.user) === 'string'){
      this.user = JSON.parse(this.user) as User
      this.userName = this.user.pseudo!
    }
  }

  logout(){
    this.authService.disconnect()
  }
}
