import { TestBed } from '@angular/core/testing';

import { GlucoseModalService } from './glucose-modal.service';

describe('GlucoseModalService', () => {
  let service: GlucoseModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlucoseModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
