import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineMfComponent } from './define-mf.component';

describe('DefineMfComponent', () => {
  let component: DefineMfComponent;
  let fixture: ComponentFixture<DefineMfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefineMfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefineMfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
