import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoHandlerComponent } from './funcao-handler.component';

describe('FuncaoHandlerComponent', () => {
  let component: FuncaoHandlerComponent;
  let fixture: ComponentFixture<FuncaoHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncaoHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncaoHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
