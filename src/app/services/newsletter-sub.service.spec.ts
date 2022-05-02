import { TestBed } from '@angular/core/testing';

import { NewsletterSubService } from './newsletter-sub.service';

describe('NewsletterSubService', () => {
  let service: NewsletterSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsletterSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
