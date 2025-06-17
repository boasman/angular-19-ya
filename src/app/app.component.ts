import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular-19-ya';
  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos= [1700,1600,1900];
  activo = true;

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
}
