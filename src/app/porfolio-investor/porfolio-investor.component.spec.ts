import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioInvestorComponent } from './porfolio-investor.component';

describe('PorfolioInvestorComponent', () => {
  let component: PorfolioInvestorComponent;
  let fixture: ComponentFixture<PorfolioInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorfolioInvestorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorfolioInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
