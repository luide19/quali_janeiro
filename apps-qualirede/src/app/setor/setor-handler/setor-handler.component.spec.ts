import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorHandlerComponent } from './setor-handler.component';

describe('SetorHandlerComponent', () => {
  let component: SetorHandlerComponent;
  let fixture: ComponentFixture<SetorHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetorHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
