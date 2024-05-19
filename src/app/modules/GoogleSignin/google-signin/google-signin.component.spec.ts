import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSigninComponent } from './google-signin.component';

describe('GoogleSigninComponent', () => {
  let component: GoogleSigninComponent;
  let fixture: ComponentFixture<GoogleSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GoogleSigninComponent]
    });
    fixture = TestBed.createComponent(GoogleSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
