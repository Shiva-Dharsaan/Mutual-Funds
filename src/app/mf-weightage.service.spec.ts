import { TestBed } from '@angular/core/testing';

import { MfWeightageService } from './mf-weightage.service';

describe('MfWeightageService', () => {
  let service: MfWeightageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfWeightageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
