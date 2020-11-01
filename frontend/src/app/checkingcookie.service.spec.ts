import { TestBed } from '@angular/core/testing';

import { CheckingcookieService } from './checkingcookie.service';

describe('CheckingcookieService', () => {
  let service: CheckingcookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckingcookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
