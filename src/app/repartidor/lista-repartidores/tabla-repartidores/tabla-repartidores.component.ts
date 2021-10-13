import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Repartidor } from 'src/app/interfaces/repartidor';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-tabla-repartidores',
  templateUrl: './tabla-repartidores.component.html',
  styleUrls: ['./tabla-repartidores.component.scss']
})
export class TablaRepartidoresComponent implements OnInit {


  repartidores:Repartidor[] = [];
  @Output() elegirRepartidor:EventEmitter<any> = new EventEmitter<any>();

  constructor(private firestore:FirestoreService) { }

  ngOnInit(): void {
    this.firestore.obtenerTodos('repartidores').subscribe((repartidoresSnapshot) => {
      this.repartidores = [];
      repartidoresSnapshot.forEach((peliculaData: any) => {
        let data = peliculaData.payload.doc.data();
        this.repartidores.push({ id:data.id, dni:data.dni, nombre:data.nombre, edad:data.edad, capTransporte:data.capTransporte, paisOrigen:data.paisOrigen, unidadPropia:data.unidadPropia});
      })
    });
  }

  onElegirRepartidor(item:any){
    this.elegirRepartidor.emit(item);
  }
}
