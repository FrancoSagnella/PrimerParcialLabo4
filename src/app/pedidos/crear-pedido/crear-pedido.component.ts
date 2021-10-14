import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/interfaces/pedido';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.scss']
})
export class CrearPedidoComponent implements OnInit {

  pedido:Pedido = {id:'', estado:'', cliente:'', email:'', localidad:'', direccion:'', descripcion:'', precio:0, peso: 0};
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
  private validarLargo(control:AbstractControl):null|object{
    let descripcion:string = control.value;
    // agarro el valor que hay dentro del control, y si incluye o no determinados caracteres, me devuelve bool
    if(descripcion.length <= 100)
    {
      return {validarLargo:true};
    }
    else
    {
      return {validarLargo:false};
    }
  }

  enviar(){
    this.pedido.cliente = this.formGroup.controls.cliente.value;
    this.pedido.email = this.formGroup.controls.email.value;
    this.pedido.localidad = this.formGroup.controls.localidad.value;
    this.pedido.direccion = this.formGroup.controls.direccion.value;
    this.pedido.descripcion = this.formGroup.controls.descripcion.value;
    this.pedido.peso = this.formGroup.controls.peso.value;
    this.pedido.precio = this.formGroup.controls.precio.value;

    this.pedido.estado = 'listo sin entregar';
    this.pedido.id = this.afs.createId();

    this.firestore.actualizar('pedidos', this.pedido.id, this.pedido).then(()=>{
      this.formGroup.controls.cliente.setValue('');
      this.formGroup.controls.email.setValue('');
      this.formGroup.controls.localidad.setValue('Seleccione uno');
      this.formGroup.controls.direccion.setValue('');
      this.formGroup.controls.descripcion.setValue('');
      this.formGroup.controls.peso.setValue('');
      this.formGroup.controls.precio.setValue('');
    });
  }
}
