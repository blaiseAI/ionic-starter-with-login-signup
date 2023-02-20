import { TestBed } from '@angular/core/testing';

import { AutologinGuard } from './autologin.guard';

describe('AutologinGuard', () => {
  let guard: AutologinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutologinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
