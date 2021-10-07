import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/usuarios';
import { usuarios } from '../usuarios/usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioLogueado?:Usuario;
  constructor() { }

  iniciarSesion(usuario:Usuario){
    let ret:boolean = false;
    usuarios.forEach(element => {
      if(element.email == usuario.email && element.password == usuario.password)
      {
        this.usuarioLogueado = element;
        ret = true;
      }
    });
    return ret;
  }

  cerrarSesion(){
    this.usuarioLogueado = undefined;
  }
}
