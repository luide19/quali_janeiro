import { TestBed } from '@angular/core/testing';

import { NovotipodeusuarioService } from './novotipodeusuario.service';

describe('NovotipodeusuarioService', () => {
  let service: NovotipodeusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovotipodeusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
