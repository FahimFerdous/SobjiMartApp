import { TestBed } from '@angular/core/testing';

import { FruitsInfoService } from './fruits-info.service';

describe('FruitsInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FruitsInfoService = TestBed.get(FruitsInfoService);
    expect(service).toBeTruthy();
  });
});
