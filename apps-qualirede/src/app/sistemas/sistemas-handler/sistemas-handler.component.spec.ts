import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasHandlerComponent } from './sistemas-handler.component';

describe('SistemasHandlerComponent', () => {
  let component: SistemasHandlerComponent;
  let fixture: ComponentFixture<SistemasHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemasHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
