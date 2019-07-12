import { TestBed } from '@angular/core/testing';

import { SfdPowerbiService } from './sfd-powerbi.service';

describe('SfdPowerbi]Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SfdPowerbiService = TestBed.get(SfdPowerbiService);
    expect(service).toBeTruthy();
  });
});
