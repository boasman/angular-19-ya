import { Component, inject, OnInit, signal } from '@angular/core';
import { ArticulosService } from './Articulos.service';
import { RouterOutlet } from "../../../node_modules/@angular/router/index";

@Component({
  standalone: true,
  selector: 'app-ServicioWeb',
  templateUrl: './ServicioWeb.component.html',
  styleUrls: ['./ServicioWeb.component.css'],
  imports: [RouterOutlet]
})
export class ServicioWebComponent implements OnInit {

  articulos: any;
  // articulosSignal = signal<any[]>([]);

  service = inject(ArticulosService)

  constructor() { }

  ngOnInit() {
  }

  load(){

    this.service.retornar()
    .subscribe(result => this.articulos = result);
  }

}
