import { TestBed } from '@angular/core/testing';

import { SingleFinanceDataService } from './single-finance-data.service';

describe('SingleFinanceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleFinanceDataService = TestBed.get(SingleFinanceDataService);
    expect(service).toBeTruthy();
  });
});
