import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contador = 1;

  incrementar(){
    this.contador++;
  }

  descrementar(){
    this.contador--;
  }


}
