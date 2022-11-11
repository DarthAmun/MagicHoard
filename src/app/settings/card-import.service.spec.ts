import { TestBed } from '@angular/core/testing';

import { CardImportService } from './card-import.service';

describe('CardImportService', () => {
  let service: CardImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
