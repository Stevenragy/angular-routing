import { Component } from '@angular/core';

@Component({
  selector: 'pm-home',
  standalone: true,
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
}
