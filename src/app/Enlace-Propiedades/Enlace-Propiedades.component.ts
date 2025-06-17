import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Enlace-Propiedades',
  standalone: true,
  imports:[],
  templateUrl: './Enlace-Propiedades.component.html',
  styleUrls: ['./Enlace-Propiedades.component.css']
})
export class EnlacePropiedadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre = ''

  fijarNombre1(){
    this.nombre = 'Juan';
  }

  fijarNombre2(){
    this.nombre = 'Ana';
  }

}
