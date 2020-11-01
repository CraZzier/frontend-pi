import { TestBed } from '@angular/core/testing';

import { AddfilesService } from './addfiles.service';

describe('AddfilesService', () => {
  let service: AddfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
