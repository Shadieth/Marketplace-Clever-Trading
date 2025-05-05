import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-news-settings',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './news-settings.component.html',
  styleUrl: './news-settings.component.css'
})
export class NewsSettingsComponent {

}