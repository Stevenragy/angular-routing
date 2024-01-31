import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { WelcomeComponent } from './home/welcome.component';

@Component({
  selector: 'pm-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [WelcomeComponent],
})
export class AppComponent {
  pageTitle = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService) {}

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
  }
}
