import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports:[RouterOutlet, RouterLink],
  selector: 'app-Europa',
  templateUrl: './Europa.component.html',
  styleUrls: ['./Europa.component.css']
})
export class EuropaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
