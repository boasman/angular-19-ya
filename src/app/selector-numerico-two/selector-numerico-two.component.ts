import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-numerico-two',
  standalone: true,
  imports: [],
  templateUrl: './selector-numerico-two.component.html',
  styleUrls: ['./selector-numerico-two.component.css']
})
export class SelectorNumericoTwoComponent implements OnInit {
  
  @Input() minimo: number = 1;
  @Input() maximo: number = 1; 

  constructor() { }

  actual: number = 1;

  ngOnInit() {
    this.actual = this.minimo;
  }

  incrementar() {
    if (this.actual < this.maximo)
      this.actual++;
  }

  decrementar() {
    if (this.actual > this.minimo)
      this.actual--;
  }

  fijar(v: number) {
    if (v >= this.minimo && v <= this.maximo)
      this.actual = v;
  }

}
