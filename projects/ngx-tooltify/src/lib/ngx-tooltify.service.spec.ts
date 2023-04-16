import { TestBed } from '@angular/core/testing';

import { NgxTooltifyService } from './ngx-tooltify.service';

describe('NgxTooltifyService', () => {
  let service: NgxTooltifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTooltifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
