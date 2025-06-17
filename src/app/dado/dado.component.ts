import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports:[],
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // @Input({required: true}) valor: string = '';
  @Input({required: true}) valor: number = 1;

  // valor: number =  Math.floor(Math.random() * 6) + 1;

}
