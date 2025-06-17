import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Cronometro',
  standalone: true,
  templateUrl: './Cronometro.component.html',
  styleUrls: ['./Cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.segundo = this.inicio;

    setInterval(() => {
      this.segundo++;
      if(this.segundo % 10 == 0)
        this.multiplo10.emit(this.segundo);      
    }, 1000)
  }

  segundo = 0;
  @Input() inicio: number = 0;
  @Output() multiplo10 = new EventEmitter<number>();

}
