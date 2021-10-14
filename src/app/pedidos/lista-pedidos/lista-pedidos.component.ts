import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pedido } from 'src/app/interfaces/pedido';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss']
})
export class ListaPedidosComponent implements OnInit {

  listadoPedidos:Pedido[] = [];
  pedidoSeleccionado!:any;

  constructor(private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.afs.collection('pedidos', ref => ref.where('estado', '==', 'listo sin entregar')).snapshotChanges().subscribe(snapshot => {
      this.listadoPedidos = [];
      snapshot.forEach((peliculaData:any)=>{
        let data = peliculaData.payload.doc.data();
        this.listadoPedidos.push({id:data.id, estado:data.estado, cliente:data.cliente, email:data.email, localidad:data.localidad, direccion:data.direccion, descripcion:data.descripcion, precio:data.precio, peso: data.peso});
      });
    });
  }

  seleccionarPedido(item:Pedido)
  {
    this.pedidoSeleccionado = undefined
    this.pedidoSeleccionado = item;
  }

}
