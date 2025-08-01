import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOffersComponent } from './top-offers.component';

describe('TopOffersComponent', () => {
  let component: TopOffersComponent;
  let fixture: ComponentFixture<TopOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
