import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SintasisTemplateComponent } from './sintasis-template/sintasis-template.component';
import { EventosComponent } from './eventos/eventos.component';
import { EnlacePropiedadesComponent } from './Enlace-Propiedades/Enlace-Propiedades.component';
import { DadoComponent } from './dado/dado.component';
import { CronometroComponent } from './Cronometro/Cronometro.component';
import { SelectorNumericoComponent } from './selector-numerico/selector-numerico.component';
import { SelectorNumericoTwoComponent } from './selector-numerico-two/selector-numerico-two.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { FormularioPlantillasComponent } from "./formulario-plantillas/formulario-plantillas.component";
import { FormularioReactivosComponent } from "./formulario-reactivos/formulario-reactivos.component";
import { FormularioReactivoTwoComponent } from "./formulario-reactivo-two/formulario-reactivo-two.component";
import { FormularioReactivosThreeComponent } from "./formulario-reactivos-three/formulario-reactivos-three.component";
import { FormuariloReactivoAndidadosComponent } from "./formuarilo-reactivo-andidados/formuarilo-reactivo-andidados.component";
import { ValidacionesStandarComponent } from "./validaciones-standar/validaciones-standar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SintasisTemplateComponent,
    EventosComponent,
    EnlacePropiedadesComponent,
    DadoComponent,
    CronometroComponent,
    SelectorNumericoComponent,
    SelectorNumericoTwoComponent,
    FormsModule,
    CommonModule,
    FormularioPlantillasComponent,
    FormularioReactivosComponent,
    FormularioReactivoTwoComponent,
    FormularioReactivosThreeComponent,
    FormuariloReactivoAndidadosComponent,
    ValidacionesStandarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  // nombre  = signal('');
  // apellido = signal('')

  nombre = '';
  apellido= '';

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

  mensaje = signal('');

  actualizar(t: number) {
    this.mensaje.update((x) => t + ' (se actualiza cada 10 segundos)');
  }

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

  @ViewChild('selector1') selector1!: SelectorNumericoTwoComponent;
  @ViewChild('selector2') selector2!: SelectorNumericoTwoComponent;

  fijarSelector1(valor: number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor: number) {
    this.selector2.fijar(valor);
  }
}
