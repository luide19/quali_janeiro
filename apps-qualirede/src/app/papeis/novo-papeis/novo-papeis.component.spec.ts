import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPapeisComponent } from './novo-papeis.component';

describe('NovoPapeisComponent', () => {
  let component: NovoPapeisComponent;
  let fixture: ComponentFixture<NovoPapeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoPapeisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoPapeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
