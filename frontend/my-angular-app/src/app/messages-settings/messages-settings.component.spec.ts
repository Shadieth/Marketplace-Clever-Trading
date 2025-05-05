import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesSettingsComponent } from './messages-settings.component';

describe('MessagesSettingsComponent', () => {
  let component: MessagesSettingsComponent;
  let fixture: ComponentFixture<MessagesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
