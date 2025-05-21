import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsSettingsComponent } from './admin-products-settings.component';

describe('AdminProductsSettingsComponent', () => {
  let component: AdminProductsSettingsComponent;
  let fixture: ComponentFixture<AdminProductsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProductsSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
