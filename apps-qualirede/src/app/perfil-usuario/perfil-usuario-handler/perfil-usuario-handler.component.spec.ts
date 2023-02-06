import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioHandlerComponent } from './perfil-usuario-handler.component';

describe('PerfilUsuarioHandlerComponent', () => {
  let component: PerfilUsuarioHandlerComponent;
  let fixture: ComponentFixture<PerfilUsuarioHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilUsuarioHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
