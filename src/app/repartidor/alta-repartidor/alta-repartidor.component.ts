import { Component, OnInit } from '@angular/core';
import { Repartidor } from '../../interfaces/repartidor';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.scss']
})
export class AltaRepartidorComponent implements OnInit {

  repartidor:Repartidor = {id:'',dni:0,nombre:'',edad:0,capTransporte:0,paisOrigen:'',unidadPropia:false};
  imgPais?:string;
  formGroup!:FormGroup;

  constructor(private fb:FormBuilder, private firestore:FirestoreService, private router:Router, private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'dni':['',[Validators.required,Validators.min(10000000),Validators.max(99999999)]],
      'nombre':['',Validators.required],
      'edad':['',[Validators.required,Validators.min(18),Validators.max(100)]],
      'capTransporte':['',[Validators.required,Validators.min(1),Validators.max(50)]],
      'paisOrigen':['',Validators.required],
      'unidadPropia':[true],
    });
  }

  enviar(){
    this.repartidor.nombre = this.formGroup.controls.nombre.value;
    this.repartidor.dni = this.formGroup.controls.dni.value;
    this.repartidor.paisOrigen = this.formGroup.controls.paisOrigen.value;
    this.repartidor.edad = this.formGroup.controls.edad.value;
    this.repartidor.capTransporte = this.formGroup.controls.capTransporte.value;
    this.repartidor.unidadPropia = this.formGroup.controls.unidadPropia.value;

    this.repartidor.id = this.afs.createId();

    this.firestore.actualizar('repartidores', this.repartidor.id, this.repartidor).then(()=>{
      this.router.navigate(['/bienvenida']);
    });
  }

  volver(){
    console.info('form', this.formGroup);
    this.router.navigate(['/bienvenida']);
  }

  paisElegido(e:any) {
    this.formGroup.controls.paisOrigen.setValue(e.name.common);
    this.imgPais = e.flags.png;
  }
}
