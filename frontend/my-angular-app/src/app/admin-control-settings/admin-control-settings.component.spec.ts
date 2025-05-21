import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlSettingsComponent } from './admin-control-settings.component';

describe('AdminControlSettingsComponent', () => {
  let component: AdminControlSettingsComponent;
  let fixture: ComponentFixture<AdminControlSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminControlSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminControlSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
