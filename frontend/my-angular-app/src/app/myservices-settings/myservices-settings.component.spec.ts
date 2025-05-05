import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyservicesSettingsComponent } from './myservices-settings.component';

describe('MyservicesSettingsComponent', () => {
  let component: MyservicesSettingsComponent;
  let fixture: ComponentFixture<MyservicesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyservicesSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyservicesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
