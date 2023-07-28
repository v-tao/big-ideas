import { TestBed } from '@angular/core/testing';

import { AllDecksService } from './all-decks.service';

describe('AllDecksService', () => {
  let service: AllDecksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllDecksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
