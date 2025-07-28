import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-TablaNro',
  templateUrl: './TablaNro.component.html',
  styleUrls: ['./TablaNro.component.css']
})
export class TablaNroComponent implements OnInit {

  nro = 0;
  tabla = '';

  activeRoute = inject(ActivatedRoute);



  constructor(private activatedRoute: ActivatedRoute ) {

    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {

      this.nro = parseInt(parametros.get('nro')!);
      this.tabla = '';

      for (let index = 1; index <= 10 ; index++) {

        let t = index * this.nro;
        this.tabla += t + '-';

      }
    })
  }

  ngOnInit() {
  }

}
