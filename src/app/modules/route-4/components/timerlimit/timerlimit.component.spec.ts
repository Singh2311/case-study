import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerlimitComponent } from './timerlimit.component';

describe('TimerlimitComponent', () => {
  let component: TimerlimitComponent;
  let fixture: ComponentFixture<TimerlimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerlimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerlimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
