import { TestBed } from '@angular/core/testing';

import { GetRecetasSavedService } from './get-recetas-saved.service';

describe('GetRecetasSavedService', () => {
  let service: GetRecetasSavedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRecetasSavedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
