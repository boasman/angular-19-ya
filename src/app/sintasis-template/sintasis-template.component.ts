import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sintasis-template',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sintasis-template.component.html',
  styleUrls: ['./sintasis-template.component.css']
})
export class SintasisTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre= 'Rodriguez Pablo';

  edad = 40;

  articulos = [
    {
      codigo: 1,
      description: 'naranja',
      precio: 540
    },
    {
      codigo: 2,
      description: 'manzanas',
      precio: 900
    },
    {
      codigo: 3,
      description: 'peras',
      precio: 490
    }
  ]

  generarNumero(){
    return Math.floor(Math.random() * 3) + 1;
  }

}
