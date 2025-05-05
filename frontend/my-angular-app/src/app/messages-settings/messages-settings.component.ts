import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-messages-settings',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './messages-settings.component.html',
  styleUrl: './messages-settings.component.css'
})
export class MessagesSettingsComponent {}