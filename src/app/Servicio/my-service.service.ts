import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }


  retornar() {

    return [

      {
        codigo: 1,
        descripcion: "Papas Update",
        precio: 12.33
      },
      {
        codigo: 2,
        descripcion: "Manzanas",
        precio: 54
      },
      {
        codigo: 3,
        descripcion: "Sandia",
        precio: 14
      }
    ]
  }

}
