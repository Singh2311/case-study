import { TestBed } from '@angular/core/testing';

import { StudentMarksService } from './student-marks.service';

describe('StudentMarksService', () => {
  let service: StudentMarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentMarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
