import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Repartidor } from 'src/app/interfaces/repartidor';

@Component({
  selector: 'app-detalle-repartidores',
  templateUrl: './detalle-repartidores.component.html',
  styleUrls: ['./detalle-repartidores.component.scss']
})
export class DetalleRepartidoresComponent implements OnInit {

  @Input() repartidorRecibido?:Repartidor;
  @Output() limpiar:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  limpiarDetalle() {
    this.repartidorRecibido = undefined;
    this.limpiar.emit(false);
  }
}
