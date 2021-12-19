import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionEditComponent } from './session-edit.component';

describe('SessionEditComponent', () => {
  let component: SessionEditComponent;
  let fixture: ComponentFixture<SessionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
