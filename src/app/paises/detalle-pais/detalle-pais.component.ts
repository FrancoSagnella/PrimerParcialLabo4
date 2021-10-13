import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Repartidor } from 'src/app/interfaces/repartidor';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit {

  @Input() repartidorRecibido?:Repartidor;
  listaPaises?:any;

  constructor(private paises:PaisesService) { }

  ngOnInit(): void {
    this.paises.traerTodosOk().subscribe(response => {
      this.listaPaises = response;
    });
  }

}
