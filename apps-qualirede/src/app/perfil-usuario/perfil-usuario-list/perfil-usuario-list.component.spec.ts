import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioListComponent } from './perfil-usuario-list.component';

describe('PerfilUsuarioListComponent', () => {
  let component: PerfilUsuarioListComponent;
  let fixture: ComponentFixture<PerfilUsuarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilUsuarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
