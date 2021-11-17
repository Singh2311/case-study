import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerstampComponent } from './timerstamp.component';

describe('TimerstampComponent', () => {
  let component: TimerstampComponent;
  let fixture: ComponentFixture<TimerstampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerstampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerstampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
