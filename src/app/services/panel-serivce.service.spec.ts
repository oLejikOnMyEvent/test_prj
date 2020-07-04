import { TestBed } from '@angular/core/testing';

import { PanelSerivceService } from './panel-serivce.service';

describe('PanelSerivceService', () => {
  let service: PanelSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
