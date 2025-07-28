import { Component, inject, OnInit, signal } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { RouterOutlet } from '@angular/router';



@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-Servicio',
  templateUrl: './Servicio.component.html',
  styleUrls: ['./Servicio.component.css']
})
export class ServicioComponent implements OnInit {

  articulos: any;

  // articulos = signal<any[]>([]);

  myService = inject(MyServiceService);

  constructor(private articulosServicios: MyServiceService) {
    this.articulos = this.articulosServicios.retornar();
    // const arts = this.articulosServicios.retornar();
    // console.log(arts);
    //this.articulos.set(this.articulosServicios.retornar());
  }

  ngOnInit() {
  }



}
