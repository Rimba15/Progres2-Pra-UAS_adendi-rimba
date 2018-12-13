import { TestBed, async, inject } from '@angular/core/testing';
import { CupangService } from './cupang.service';

describe('Service: Cupang', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CupangService]
    });
  });

  it('should ...', inject([CupangService], (service: CupangService) => {
    expect(service).toBeTruthy();
  }));
});
