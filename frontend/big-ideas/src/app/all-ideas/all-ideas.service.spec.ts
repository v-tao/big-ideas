import { TestBed } from '@angular/core/testing';

import { AllIdeasService } from './all-ideas.service';

describe('AllIdeasService', () => {
  let service: AllIdeasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllIdeasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
