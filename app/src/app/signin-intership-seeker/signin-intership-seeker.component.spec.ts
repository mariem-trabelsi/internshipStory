import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninIntershipSeekerComponent } from './signin-intership-seeker.component';

describe('SigninIntershipSeekerComponent', () => {
  let component: SigninIntershipSeekerComponent;
  let fixture: ComponentFixture<SigninIntershipSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninIntershipSeekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninIntershipSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
