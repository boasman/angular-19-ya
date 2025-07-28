import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports:[
    RouterLink,
    RouterOutlet
  ],
  selector: 'app-RutaNoExistente',
  templateUrl: './RutaNoExistente.component.html',
  styleUrls: ['./RutaNoExistente.component.css']
})
export class RutaNoExistenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
