import { TestBed } from '@angular/core/testing';

import { MiceServiceService } from './mice-service.service';

describe('MiceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiceServiceService = TestBed.get(MiceServiceService);
    expect(service).toBeTruthy();
  });
});
