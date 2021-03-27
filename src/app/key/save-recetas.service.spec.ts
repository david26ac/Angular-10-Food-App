import { TestBed } from '@angular/core/testing';

import { SaveRecetasService } from './save-recetas.service';

describe('SaveRecetasService', () => {
  let service: SaveRecetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveRecetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
