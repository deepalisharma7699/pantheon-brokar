import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerKycComponent } from './broker-kyc.component';

describe('BrokerKycComponent', () => {
  let component: BrokerKycComponent;
  let fixture: ComponentFixture<BrokerKycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerKycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
