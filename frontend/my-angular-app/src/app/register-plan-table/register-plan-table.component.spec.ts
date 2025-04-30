import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPlanTableComponent } from './register-plan-table.component';

describe('RegisterPlanTableComponent', () => {
  let component: RegisterPlanTableComponent;
  let fixture: ComponentFixture<RegisterPlanTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPlanTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPlanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
