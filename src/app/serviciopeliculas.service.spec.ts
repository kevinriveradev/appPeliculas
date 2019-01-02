import { TestBed } from '@angular/core/testing';

import { ServiciopeliculasService } from './serviciopeliculas.service';

describe('ServiciopeliculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciopeliculasService = TestBed.get(ServiciopeliculasService);
    expect(service).toBeTruthy();
  });
});
