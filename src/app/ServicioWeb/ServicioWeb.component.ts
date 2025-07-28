import { Component, inject, OnInit } from '@angular/core';
import { ArticulosService } from './Articulos.service';

@Component({
  selector: 'app-ServicioWeb',
  templateUrl: './ServicioWeb.component.html',
  styleUrls: ['./ServicioWeb.component.css']
})
export class ServicioWebComponent implements OnInit {

  articulos: any;

  service = inject(ArticulosService)

  constructor() { }

  ngOnInit() {
  }

  load(){

    this.service.retornar()
    .subscribe(result => this.articulos = result);
  }

}
