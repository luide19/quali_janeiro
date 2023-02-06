import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPerfilUsuarioComponent } from './novo-perfil-usuario.component';

describe('NovoPerfilUsuarioComponent', () => {
  let component: NovoPerfilUsuarioComponent;
  let fixture: ComponentFixture<NovoPerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoPerfilUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
