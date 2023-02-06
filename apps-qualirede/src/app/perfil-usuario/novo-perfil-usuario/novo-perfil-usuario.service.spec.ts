import { TestBed } from '@angular/core/testing';

import { NovoPerfilUsuarioService } from './novo-perfil-usuario.service';

describe('NovoPerfilUsuarioService', () => {
  let service: NovoPerfilUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoPerfilUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
