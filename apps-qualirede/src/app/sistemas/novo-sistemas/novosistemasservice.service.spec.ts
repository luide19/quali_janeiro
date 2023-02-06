import { TestBed } from '@angular/core/testing';

import { NovosistemasserviceService } from './novosistemasservice.service';

describe('NovosistemasserviceService', () => {
  let service: NovosistemasserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovosistemasserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
