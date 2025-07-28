import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone:true,
  imports:[RouterLink,RouterOutlet],
  selector: 'app-America',
  templateUrl: './America.component.html',
  styleUrls: ['./America.component.css']
})
export class AmericaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
