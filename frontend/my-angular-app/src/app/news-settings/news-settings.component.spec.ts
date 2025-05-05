import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSettingsComponent } from './news-settings.component';

describe('NewsSettingsComponent', () => {
  let component: NewsSettingsComponent;
  let fixture: ComponentFixture<NewsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
