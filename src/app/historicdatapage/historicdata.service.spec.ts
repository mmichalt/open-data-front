import { TestBed } from '@angular/core/testing';

import { HistoricdataService } from './historicdata.service';

describe('HistoricdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoricdataService = TestBed.get(HistoricdataService);
    expect(service).toBeTruthy();
  });
});
