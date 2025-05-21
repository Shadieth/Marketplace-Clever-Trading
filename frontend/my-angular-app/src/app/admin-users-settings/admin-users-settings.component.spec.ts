import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersSettingsComponent } from './admin-users-settings.component';

describe('AdminUsersSettingsComponent', () => {
  let component: AdminUsersSettingsComponent;
  let fixture: ComponentFixture<AdminUsersSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUsersSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUsersSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
