import { TestBed } from '@angular/core/testing';

import { GettingDataService } from './getting-data.service';

describe('GettingDataService', () => {
  let service: GettingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
