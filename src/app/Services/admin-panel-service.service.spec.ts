import { TestBed } from '@angular/core/testing';

import { AdminPanelService } from './admin-panel-service.service';

describe('AdminPanelServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminPanelService = TestBed.get(AdminPanelService);
    expect(service).toBeTruthy();
  });
});
