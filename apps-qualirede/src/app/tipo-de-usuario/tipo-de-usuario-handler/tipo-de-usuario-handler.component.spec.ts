import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeUsuarioHandlerComponent } from './tipo-de-usuario-handler.component';

describe('TipoDeUsuarioHandlerComponent', () => {
  let component: TipoDeUsuarioHandlerComponent;
  let fixture: ComponentFixture<TipoDeUsuarioHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDeUsuarioHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoDeUsuarioHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
