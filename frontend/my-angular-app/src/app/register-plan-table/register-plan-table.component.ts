import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-plan-table',
  standalone: true,
  templateUrl: './register-plan-table.component.html',
  styleUrl: './register-plan-table.component.css'
})
export class RegisterPlanTableComponent {
  @Input() selectedPlan: 'standard' | 'premium' = 'standard';
  @Output() planChange = new EventEmitter<'standard' | 'premium'>();

  selectPlan(plan: 'standard' | 'premium') {
    this.selectedPlan = plan;
    this.planChange.emit(plan);
  }
}
