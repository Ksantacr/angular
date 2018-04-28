import { TestBed, inject } from '@angular/core/testing';

import { ListaApiService } from './lista-api.service';

describe('ListaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaApiService]
    });
  });

  it('should be created', inject([ListaApiService], (service: ListaApiService) => {
    expect(service).toBeTruthy();
  }));
});
