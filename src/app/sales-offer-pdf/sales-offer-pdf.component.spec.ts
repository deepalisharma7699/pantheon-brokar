import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOfferPdfComponent } from './sales-offer-pdf.component';

describe('SalesOfferPdfComponent', () => {
  let component: SalesOfferPdfComponent;
  let fixture: ComponentFixture<SalesOfferPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOfferPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOfferPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
