import { Component, effect, input, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-selector-numerico-two',
  standalone: true,
  imports: [],
  templateUrl: './selector-numerico-two.component.html',
  styleUrls: ['./selector-numerico-two.component.css']
})
export class SelectorNumericoTwoComponent implements OnInit {

  minimo =  input.required<number>();
  maximo = input.required<number>();

  actual  = signal(0);

  constructor() { 

    effect(() => {
      if(this.minimo() !== undefined && this.maximo() !== undefined){
        this.actual.set(this.minimo())
      }
    })    
  }  

  ngOnInit() {
    // this.actual = this.minimo;
  }

  incrementar() {
    if (this.actual() < this.maximo())
      this.actual.update(v => v + 1 );
  }

  decrementar() {
    if (this.actual() > this.minimo())
      this.actual.update(v => v - 1)
  }

  fijar(v: number) {
    if (v >= this.minimo() && v <= this.maximo())      
      this.actual.set(v);
  }

}
