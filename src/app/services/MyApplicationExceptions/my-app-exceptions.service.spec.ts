import { TestBed } from '@angular/core/testing';

import { MyAppExceptionsService } from './my-app-exceptions.service';

describe('MyAppExceptionsService', () => {
  let service: MyAppExceptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAppExceptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
