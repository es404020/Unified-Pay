import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedPaymentComponent } from './unified-payment.component';

describe('UnifiedPaymentComponent', () => {
  let component: UnifiedPaymentComponent;
  let fixture: ComponentFixture<UnifiedPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnifiedPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnifiedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
