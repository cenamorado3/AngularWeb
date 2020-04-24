import { TestBed } from '@angular/core/testing';

import { GithubFollowersService } from './github-service.service';

describe('GithubServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubFollowersService = TestBed.get(GithubFollowersService);
    expect(service).toBeTruthy();
  });
});
