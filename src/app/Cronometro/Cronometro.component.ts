import { Component, effect, input, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-Cronometro',
  standalone: true,
  templateUrl: './Cronometro.component.html',
  styleUrls: ['./Cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  segundo = signal(0);
  inicio = input(0)
  multiplo10 = output<number>();

    constructor() {
    
    effect(() => {
      this.segundo.set(this.inicio());
    });

    
    setInterval(() => {
      let nuevoValor = this.segundo() + 1;
      this.segundo.set(nuevoValor);

      if (nuevoValor % 10 === 0) {
        this.multiplo10.emit(nuevoValor);
      }
    }, 1000);
  }

  ngOnInit() {

  }

}
