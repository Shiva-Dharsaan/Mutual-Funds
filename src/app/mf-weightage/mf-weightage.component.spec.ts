import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfWeightageComponent } from './mf-weightage.component';

describe('MfWeightageComponent', () => {
  let component: MfWeightageComponent;
  let fixture: ComponentFixture<MfWeightageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfWeightageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MfWeightageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
