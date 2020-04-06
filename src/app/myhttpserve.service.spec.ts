import { TestBed } from '@angular/core/testing';

import { MyhttpserveService } from './myhttpserve.service';

describe('MyhttpserveService', () => {
  let service: MyhttpserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyhttpserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
