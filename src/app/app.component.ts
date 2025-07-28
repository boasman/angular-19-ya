import { Component, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ServicioComponent } from "./Servicio/Servicio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ServicioComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  // nombre  = signal('');
  // apellido = signal('')

  // nombre = '';
  // apellido= '';

  constructor(){
      // this.nombre.set('Maria')
  }




  // articulos = signal<any[]>([
  //   {codigo: 1, description : 'papas', precio: 10.55},
  //   {codigo: 2, description : 'manzanas', precio: 12.10},
  //   {codigo: 3, description : 'melon', precio: 52.30},
  //   {codigo: 4, description : 'cebollas', precio: 17},
  //   {codigo: 5, description : 'calazaba', precio: 20},

  // ]);

  // mensaje = signal('');

  // actualizar(t: number) {
  //   this.mensaje.update((x) => t + ' (se actualiza cada 10 segundos)');
  // }

  // title = 'angular-19-ya';
  // nombre = 'Rodriguez Pablo';
  // edad = 40;
  // email = 'rpablo@gmail.com';
  // sueldos= [1700,1600,1900];
  // activo = true;
  // resultado= '';

  //  valor1: number = this.retornarAleatorio();
  //  valor2: number = this.retornarAleatorio();
  //  valor3: number = this.retornarAleatorio();

  //   sitioWeb= 'https://www.google.com';

  //  esActivo(){

  //   if(this.activo){
  //     return 'Trabajador activo';
  //   }
  //   else{
  //     return 'Trabajador inactivo';
  //   }
  //  }

  //  ultimos3sueldos(){
  //   let suma = 0;

  //   for(let x=0; x>this.sueldos.length; x++){
  //     suma += this.sueldos[x];
  //   }
  //  }

  //  retornarAleatorio(){
  //   return Math.floor(Math.random() * 6 ) + 1;
  // }

  // tirar(){

  //   this.valor1 = this.retornarAleatorio();
  //   this.valor2 = this.retornarAleatorio();
  //   this.valor3 = this.retornarAleatorio();

  //   if(this.valor1 === this.valor2 && this.valor1 === this.valor3){
  //     this.
  //     resultado = 'Gano'
  //   }
  //   else{
  //     this.resultado = 'Perdio';
  //   }
  // }

  // @ViewChild('selector1') selector1!: SelectorNumericoTwoComponent;
  // @ViewChild('selector2') selector2!: SelectorNumericoTwoComponent;

  // fijarSelector1(valor: number) {
  //   this.selector1.fijar(valor);
  // }

  // fijarSelector2(valor: number) {
  //   this.selector2.fijar(valor);
  // }
}
