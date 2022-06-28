import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninHrComponent } from './signin-hr.component';

describe('SigninHrComponent', () => {
  let component: SigninHrComponent;
  let fixture: ComponentFixture<SigninHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninHrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
