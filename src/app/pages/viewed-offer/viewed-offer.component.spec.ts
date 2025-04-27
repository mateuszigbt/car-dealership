import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedOfferComponent } from './viewed-offer.component';

describe('ViewedOfferComponent', () => {
  let component: ViewedOfferComponent;
  let fixture: ComponentFixture<ViewedOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewedOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewedOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
