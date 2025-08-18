import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  standalone: true,
  selector: 'app-ComunicacionAngular_Php',
  templateUrl: './ComunicacionAngular_Php.component.html',
  styleUrls: ['./ComunicacionAngular_Php.component.css']
})
export class ComunicacionAngular_PhpComponent implements OnInit {

  constructor(private articulosServicio: ArticulosService) {

    this.articulosServicio.recuperarTodos();

   }

  ngOnInit() {
  }

  articulos: any;


  art={
    codigo: 0,
    description: '',
    precio: 0
  }

}
