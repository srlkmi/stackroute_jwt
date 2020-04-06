import { TestBed } from '@angular/core/testing';

import { MynotesService } from './mynotes.service';

describe('MynotesService', () => {
  let service: MynotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MynotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
