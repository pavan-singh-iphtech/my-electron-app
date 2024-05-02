import { TestBed } from '@angular/core/testing';

import { GoogleAnalyticsServiceTsService } from './google-analytics.service.ts.service';

describe('GoogleAnalyticsServiceTsService', () => {
  let service: GoogleAnalyticsServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleAnalyticsServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
