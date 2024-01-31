import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from './message.service';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './message.component.html',
  standalone: true,
  styles: ['.message-row { margin-bottom: 10px }'],
  imports: [CommonModule],
})
export class MessageComponent {
  messageService = inject(MessageService);

  get messages(): string[] {
    return this.messageService.messages;
  }

  constructor(private router: Router) {}

  close(): void {
    // Close the popup.
  }
}
