import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeUsuarioListComponent } from './tipo-de-usuario-list.component';

describe('TipoDeUsuarioListComponent', () => {
  let component: TipoDeUsuarioListComponent;
  let fixture: ComponentFixture<TipoDeUsuarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDeUsuarioListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoDeUsuarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
