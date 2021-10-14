import { TestBed } from '@angular/core/testing';

import { PedidoGuardGuard } from './pedido-guard.guard';

describe('PedidoGuardGuard', () => {
  let guard: PedidoGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PedidoGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
