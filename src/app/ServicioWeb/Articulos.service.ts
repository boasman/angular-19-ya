import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  HttpClient = inject(HttpClient);

  constructor() { }

  retornar(){
    return this.HttpClient.get('https://ejerciciostutorialesya.com/vue/datos.php');
  }
}
