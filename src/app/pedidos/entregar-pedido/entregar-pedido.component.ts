import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/interfaces/pedido';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-entregar-pedido',
  templateUrl: './entregar-pedido.component.html',
  styleUrls: ['./entregar-pedido.component.scss']
})
export class EntregarPedidoComponent implements OnInit {

  @Input() pedido:any;


  constructor(private firestore:FirestoreService, private router:Router, private afs:AngularFirestore) { }

  ngOnInit(): void {
  }

  entregar(){
    this.pedido.estado = 'entregado';
    this.firestore.actualizar('pedidos', this.pedido.id, this.pedido).then(()=>{
      this.pedido = undefined;
    });
  }
  rechazar(){
    this.pedido.estado = 'rechazado';
    this.firestore.actualizar('pedidos', this.pedido.id, this.pedido).then(()=>{
      this.pedido = undefined;
    });
  }
  cancelar(){
    this.pedido = undefined;
  }
}
