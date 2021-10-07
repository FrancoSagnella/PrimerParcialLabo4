import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  seccion?: string;
  datosPersonales:any;
  img:string='';
  nombre:string='';
  github:string='';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.setSeccion("descripcion");
    this.datosGitHub();
  }

  setSeccion(seccion: string){
    this.seccion = seccion;
  }

  datosGitHub() {
    this.http.get("https://api.github.com/users/FrancoSagnella").subscribe(datosRetornados => {
      console.info('datos github', datosRetornados);
      this.datosPersonales=datosRetornados;

      this.img=this.datosPersonales.avatar_url;
      this.nombre=this.datosPersonales.name;
      this.github=this.datosPersonales.html_url;
    });
  }
}
