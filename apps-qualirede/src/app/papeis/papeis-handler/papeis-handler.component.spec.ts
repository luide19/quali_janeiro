import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapeisHandlerComponent } from './papeis-handler.component';

describe('PapeisHandlerComponent', () => {
  let component: PapeisHandlerComponent;
  let fixture: ComponentFixture<PapeisHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapeisHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapeisHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
