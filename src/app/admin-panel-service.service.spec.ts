import { TestBed } from '@angular/core/testing';

import { AdminPanelServiceService } from './admin-panel-service.service';

describe('AdminPanelServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminPanelServiceService = TestBed.get(AdminPanelServiceService);
    expect(service).toBeTruthy();
  });
});
