import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoSistemasComponent } from './novo-sistemas.component';

describe('NovoSistemasComponent', () => {
  let component: NovoSistemasComponent;
  let fixture: ComponentFixture<NovoSistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoSistemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
