import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string | null | undefined = 'Accueil';
  readonly authService : AuthService = inject(AuthService)

  logout(){
    this.authService.disconnect()
  }
}
