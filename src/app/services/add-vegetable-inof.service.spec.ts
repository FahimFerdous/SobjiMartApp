import { TestBed } from '@angular/core/testing';

import { AddVegetableInofService } from './add-vegetable-inof.service';

describe('AddVegetableInofService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddVegetableInofService = TestBed.get(AddVegetableInofService);
    expect(service).toBeTruthy();
  });
});
