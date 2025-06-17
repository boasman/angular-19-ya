import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-numerico',
  standalone: true,
  imports: [],
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.css']
})
export class SelectorNumericoComponent implements OnInit {

  @Input() minimo: number = 1;
  @Input() maximo: number = 1;
  actual: number= 1;

  constructor() { }

  ngOnInit() {
    this.actual = this.minimo;
  }

  incrementar(){
    if(this.actual < this.maximo){
      this.actual++;
    }
  }

  decrementar(){
    if(this.actual > this.minimo){
      this.actual--;
    }
  }

  fijar(v: number){
    if(v >= this.minimo && v <= this.maximo){
      this.actual = v;
    }
  }

}
