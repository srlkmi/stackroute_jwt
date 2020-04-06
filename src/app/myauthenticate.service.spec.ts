import { TestBed } from '@angular/core/testing';

import { MyauthenticateService } from './myauthenticate.service';

describe('MyauthenticateService', () => {
  let service: MyauthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyauthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
