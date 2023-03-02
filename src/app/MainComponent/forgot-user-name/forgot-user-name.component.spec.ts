import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotUserNameComponent } from './forgot-user-name.component';

describe('ForgotUserNameComponent', () => {
  let component: ForgotUserNameComponent;
  let fixture: ComponentFixture<ForgotUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotUserNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
