import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingCollateralComponent } from './marketing-collateral.component';

describe('MarketingCollateralComponent', () => {
  let component: MarketingCollateralComponent;
  let fixture: ComponentFixture<MarketingCollateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingCollateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingCollateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
