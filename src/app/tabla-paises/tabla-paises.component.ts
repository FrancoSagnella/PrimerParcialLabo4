import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  listaPaises?:any;

  @Output() elegirPais:EventEmitter<any> = new EventEmitter<any>();

  constructor(private paises:PaisesService) { }

  ngOnInit(): void {
    this.paises.traerTodosOk().subscribe(response => {
      this.listaPaises = response;
      console.info('lista de paises', this.listaPaises);
    });
  }
  onElegirPais(item:any) {
    this.elegirPais.emit(item);
  }
}
