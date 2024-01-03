import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorSignUpComponent } from './investor-sign-up.component';

describe('InvestorSignUpComponent', () => {
  let component: InvestorSignUpComponent;
  let fixture: ComponentFixture<InvestorSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorSignUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestorSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
