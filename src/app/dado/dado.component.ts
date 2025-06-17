import { Component, OnInit } from '@angular/core';

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

  valor: number =  Math.floor(Math.random() * 6) + 1;

}
