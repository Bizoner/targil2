import { TestBed, inject } from '@angular/core/testing';

import { SecurityRouteService } from './security-route.service';

describe('SecurityRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityRouteService]
    });
  });

  it('should be created', inject([SecurityRouteService], (service: SecurityRouteService) => {
    expect(service).toBeTruthy();
  }));
});
