import { TestBed } from '@angular/core/testing';

import { MyroutingService } from './myrouting.service';

describe('MyroutingService', () => {
  let service: MyroutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyroutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
