import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSignUpComponent } from './portfolio-sign-up.component';

describe('PortfolioSignUpComponent', () => {
  let component: PortfolioSignUpComponent;
  let fixture: ComponentFixture<PortfolioSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSignUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
