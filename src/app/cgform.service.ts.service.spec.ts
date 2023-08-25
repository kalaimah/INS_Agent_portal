import { TestBed } from '@angular/core/testing';

import { CgformServiceTsService } from './cgform.service.ts.service';

describe('CgformServiceTsService', () => {
  let service: CgformServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CgformServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
