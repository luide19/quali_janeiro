import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapeisListComponent } from './papeis-list.component';

describe('PapeisListComponent', () => {
  let component: PapeisListComponent;
  let fixture: ComponentFixture<PapeisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapeisListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapeisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
