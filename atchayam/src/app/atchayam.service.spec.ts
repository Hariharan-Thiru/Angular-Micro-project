import { TestBed } from '@angular/core/testing';

import { AtchayamService } from './atchayam.service';

describe('AtchayamService', () => {
  let service: AtchayamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtchayamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
