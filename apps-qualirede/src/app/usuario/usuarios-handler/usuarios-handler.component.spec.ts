import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosHandlerComponent } from './usuarios-handler.component';

describe('UsuariosHandlerComponent', () => {
  let component: UsuariosHandlerComponent;
  let fixture: ComponentFixture<UsuariosHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
