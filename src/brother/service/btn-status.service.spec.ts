import { TestBed, inject } from '@angular/core/testing';

import { BtnStatusService } from './btn-status.service';

describe('BtnStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BtnStatusService]
    });
  });

  it('should be created', inject([BtnStatusService], (service: BtnStatusService) => {
    expect(service).toBeTruthy();
  }));
});
