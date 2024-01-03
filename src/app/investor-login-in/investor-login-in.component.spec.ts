import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorLoginInComponent } from './investor-login-in.component';

describe('InvestorLoginInComponent', () => {
  let component: InvestorLoginInComponent;
  let fixture: ComponentFixture<InvestorLoginInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorLoginInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestorLoginInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
