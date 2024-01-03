import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachStockComponent } from './each-stock.component';

describe('EachStockComponent', () => {
  let component: EachStockComponent;
  let fixture: ComponentFixture<EachStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EachStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EachStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
