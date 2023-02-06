import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoTipoDeUsuarioComponent } from './novo-tipo-de-usuario.component';

describe('NovoTipoDeUsuarioComponent', () => {
  let component: NovoTipoDeUsuarioComponent;
  let fixture: ComponentFixture<NovoTipoDeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoTipoDeUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoTipoDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
