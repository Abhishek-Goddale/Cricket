import { TestBed, inject } from '@angular/core/testing';

import { CricketService } from './cricket.service';

describe('CricketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CricketService]
    });
  });

  it('should be created', inject([CricketService], (service: CricketService) => {
    expect(service).toBeTruthy();
  }));
});
