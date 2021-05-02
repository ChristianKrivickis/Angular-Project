import { TestBed } from '@angular/core/testing';

import { CoinAPIService } from './coin-api.service';

describe('DataService', () => {
  let service: CoinAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
