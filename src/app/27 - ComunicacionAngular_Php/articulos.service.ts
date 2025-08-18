import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

constructor() { }

url='https://ejerciciostutorialesya.com/angular/proyecto016/'; // disponer url de su servidor que tiene las páginas PHP

  HttpClient = inject(HttpClient);

recuperarTodos(){
  return this.HttpClient.get(`${this.url}recuperartodos.php`);
}

alta(articulo:any){
  return this.HttpClient.post(`${this.url}alta.php`, JSON.stringify(articulo));
}

baja(codigo:number){
  return this.HttpClient.get(`${this.url}baja.php?codigo=${codigo}`);
}

seleccionar(codigo:number){
  return this.HttpClient.get(`${this.url}seleccionar.php?codigo=${codigo}`);
}

modificar(articulo:any){
  return this.HttpClient.post(`${this.url}modificacion.php`, JSON.stringify(articulo));
}

}
