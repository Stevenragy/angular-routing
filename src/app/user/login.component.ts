import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  errorMessage = '';
  pageTitle = 'Log In';

  constructor(private authService: AuthService) {}

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      // Navigate to the Product List page after log in.
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
