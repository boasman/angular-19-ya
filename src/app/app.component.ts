import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SintasisTemplateComponent } from "./sintasis-template/sintasis-template.component";
import { EventosComponent } from "./eventos/eventos.component";
import { EnlacePropiedadesComponent } from "./Enlace-Propiedades/Enlace-Propiedades.component";
import { DadoComponent } from './dado/dado.component';
import { CronometroComponent } from './Cronometro/Cronometro.component';
import { SelectorNumericoComponent } from './selector-numerico/selector-numerico.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    SintasisTemplateComponent, 
    EventosComponent, 
    EnlacePropiedadesComponent,
    DadoComponent,
    CronometroComponent,
    SelectorNumericoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  mensaje = ''


actualizar(t: number) {
  this.mensaje = t + ' (se actualiza cada 10 segundos)';
}

  title = 'angular-19-ya';
  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos= [1700,1600,1900];
  activo = true;
  resultado= '';


  
 valor1: number = this.retornarAleatorio();
 valor2: number = this.retornarAleatorio();
 valor3: number = this.retornarAleatorio();

  sitioWeb= 'https://www.google.com'; 


 esActivo(){

  if(this.activo){
    return 'Trabajador activo';
  }
  else{
    return 'Trabajador inactivo'; 
  }
 }

 ultimos3sueldos(){
  let suma = 0;

  for(let x=0; x>this.sueldos.length; x++){
    suma += this.sueldos[x];
  }
 }

 retornarAleatorio(){
  return Math.floor(Math.random() * 6 ) + 1;
}

tirar(){

  this.valor1 = this.retornarAleatorio();
  this.valor2 = this.retornarAleatorio();
  this.valor3 = this.retornarAleatorio();

  if(this.valor1 === this.valor2 && this.valor1 === this.valor3){
    this.
    resultado = 'Gano'
  }
  else{
    this.resultado = 'Perdio';
  }
}


}



