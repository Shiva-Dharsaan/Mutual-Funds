import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmutualfundsComponent } from './viewmutualfunds.component';

describe('ViewmutualfundsComponent', () => {
  let component: ViewmutualfundsComponent;
  let fixture: ComponentFixture<ViewmutualfundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewmutualfundsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewmutualfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
