import { TestBed } from '@angular/core/testing';

import { MiceService } from './mice-service.service';

describe('MiceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiceService = TestBed.get(MiceService);
    expect(service).toBeTruthy();
  });
});
