import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoFuncaoComponent } from './novo-funcao.component';

describe('NovoFuncaoComponent', () => {
  let component: NovoFuncaoComponent;
  let fixture: ComponentFixture<NovoFuncaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoFuncaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
