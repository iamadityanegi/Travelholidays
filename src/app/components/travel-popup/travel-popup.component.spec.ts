import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPopupComponent } from './travel-popup.component';

describe('TravelPopupComponent', () => {
  let component: TravelPopupComponent;
  let fixture: ComponentFixture<TravelPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelPopupComponent]
    });
    fixture = TestBed.createComponent(TravelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
