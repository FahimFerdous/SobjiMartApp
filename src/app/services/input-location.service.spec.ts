import { TestBed } from '@angular/core/testing';

import { InputLocationService } from './input-location.service';

describe('InputLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputLocationService = TestBed.get(InputLocationService);
    expect(service).toBeTruthy();
  });
});
