import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Repartidor } from 'src/app/interfaces/repartidor';

@Component({
  selector: 'app-lista-repartidores',
  templateUrl: './lista-repartidores.component.html',
  styleUrls: ['./lista-repartidores.component.scss']
})
export class ListaRepartidoresComponent implements OnInit {

  tablaRepartidores:boolean = false;
  repartidorSeleccionado?:Repartidor;

  constructor(private fb:FormBuilder, private firestore:FirestoreService, private router:Router, private afs:AngularFirestore) { }

  ngOnInit(): void {
  }

  mostrarTablaRepartidores() {
    if(this.tablaRepartidores)
    {
      this.tablaRepartidores = false;
    }
    else{
      this.tablaRepartidores = true;
    }
  }

  meElegirRepartidor(e:any) {
    this.repartidorSeleccionado = e;
  }

  meLimpiarDetalles(e:any){
    this.repartidorSeleccionado = undefined;
  }
}
