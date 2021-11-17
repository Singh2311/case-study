import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountclicksComponent } from './countclicks.component';

describe('CountclicksComponent', () => {
  let component: CountclicksComponent;
  let fixture: ComponentFixture<CountclicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountclicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountclicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
