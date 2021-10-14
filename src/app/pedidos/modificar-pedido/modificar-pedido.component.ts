import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/interfaces/pedido';
import { FirestoreService } from 'src/app/services/firestore.service';
import { PedidoGuardGuard } from 'src/app/services/pedido-guard.guard';

@Component({
  selector: 'app-modificar-pedido',
  templateUrl: './modificar-pedido.component.html',
  styleUrls: ['./modificar-pedido.component.scss']
})
export class ModificarPedidoComponent implements OnInit, OnChanges {

  @Input() pedido!:any;
  formGroup!:FormGroup;

  constructor(private fb:FormBuilder, private firestore:FirestoreService, private router:Router, private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'cliente':['',Validators.required],
      'email':['',Validators.required],
      'localidad':['',Validators.required],
      'direccion':['',Validators.required],
      'descripcion':['', [Validators.required, Validators.maxLength(100)]],
      'peso':['', [Validators.required, Validators.min(500),Validators.max(1000)]],
      'precio':['', Validators.required],
    });
  }

  ngOnChanges() {
    this.formGroup.controls.cliente.setValue(this.pedido.cliente);
    this.formGroup.controls.email.setValue(this.pedido.email);
    this.formGroup.controls.localidad.setValue(this.pedido.localidad);
    this.formGroup.controls.direccion.setValue(this.pedido.direccion);
    this.formGroup.controls.descripcion.setValue(this.pedido.descripcion);
    this.formGroup.controls.peso.setValue(this.pedido.peso);
    this.formGroup.controls.precio.setValue(this.pedido.precio);
  }

  enviar(){
    this.pedido.cliente = this.formGroup.controls.cliente.value;
    this.pedido.email = this.formGroup.controls.email.value;
    this.pedido.localidad = this.formGroup.controls.localidad.value;
    this.pedido.direccion = this.formGroup.controls.direccion.value;
    this.pedido.descripcion = this.formGroup.controls.descripcion.value;
    this.pedido.peso = this.formGroup.controls.peso.value;
    this.pedido.precio = this.formGroup.controls.precio.value;

    this.firestore.actualizar('pedidos', this.pedido.id, this.pedido).then(()=>{
      this.formGroup.controls.cliente.setValue('');
      this.formGroup.controls.email.setValue('');
      this.formGroup.controls.localidad.setValue('Seleccione uno');
      this.formGroup.controls.direccion.setValue('');
      this.formGroup.controls.descripcion.setValue('');
      this.formGroup.controls.peso.setValue('');
      this.formGroup.controls.precio.setValue('');
      this.pedido = undefined;
    });
  }

  limpiar(){
    this.pedido = undefined;
  }

}
