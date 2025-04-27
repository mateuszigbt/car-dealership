import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndedOffersComponent } from './ended-offers.component';

describe('EndedOffersComponent', () => {
  let component: EndedOffersComponent;
  let fixture: ComponentFixture<EndedOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndedOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
