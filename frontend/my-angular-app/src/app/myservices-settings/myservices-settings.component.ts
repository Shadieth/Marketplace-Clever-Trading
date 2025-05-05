import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-myservices-settings',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './myservices-settings.component.html',
  styleUrl: './myservices-settings.component.css'
})
export class MyservicesSettingsComponent {

}