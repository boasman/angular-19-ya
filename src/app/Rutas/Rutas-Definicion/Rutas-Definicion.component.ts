import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  selector: 'app-Rutas-Definicion',
  templateUrl: './Rutas-Definicion.component.html',
  styleUrls: ['./Rutas-Definicion.component.css']
})
export class RutasDefinicionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
