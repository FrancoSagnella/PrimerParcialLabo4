import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private paisActual:string = 'Argentina';

  constructor(private http:HttpClient) { }

  getPaisActual(){
    return this.paisActual;
  }
  setPaisActual(param:string){
    this.paisActual = param;
  }
  traerTodos(){
    this.http.get('https://restcountries.com/v3/all/').subscribe(datosRetornados => {
      console.info('datos retornados',datosRetornados);
      return datosRetornados;
    });
  }
  traerTodosOk(){
    return this.http.get('https://restcountries.com/v3.1/all');
  }
}
