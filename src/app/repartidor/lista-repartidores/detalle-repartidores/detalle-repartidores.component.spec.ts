import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRepartidoresComponent } from './detalle-repartidores.component';

describe('DetalleRepartidoresComponent', () => {
  let component: DetalleRepartidoresComponent;
  let fixture: ComponentFixture<DetalleRepartidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRepartidoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
