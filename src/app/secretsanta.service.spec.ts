import { TestBed } from '@angular/core/testing';

import { SecretsantaService } from './secretsanta.service';

describe('SecretsantaService', () => {
  let service: SecretsantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretsantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
