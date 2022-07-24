import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHrsComponent } from './list-hrs.component';

describe('ListHrsComponent', () => {
  let component: ListHrsComponent;
  let fixture: ComponentFixture<ListHrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
