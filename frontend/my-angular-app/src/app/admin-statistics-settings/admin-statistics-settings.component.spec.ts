import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticsSettingsComponent } from './admin-statistics-settings.component';

describe('AdminStatisticsSettingsComponent', () => {
  let component: AdminStatisticsSettingsComponent;
  let fixture: ComponentFixture<AdminStatisticsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStatisticsSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStatisticsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
