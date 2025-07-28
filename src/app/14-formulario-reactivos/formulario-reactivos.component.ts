import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivos',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './formulario-reactivos.component.html',
  styleUrls: ['./formulario-reactivos.component.css']
})
export class FormularioReactivosComponent implements OnInit {

  
  listas = signal<string[]>([]);

  actividad = new FormControl();

  // listas: string[];

  constructor() { 
    // this.listas = [];

    let datos = localStorage.getItem("actividades");

    if(datos !== null){
      let arreglo = JSON.parse(datos);
      if(arreglo !== null){
        for(let actividad of arreglo){
          this.listas.set(actividad);
        }
      }
    }
  }

  ngOnInit() {
  }

  agregar(){
    // this.listas.update(this.actividad.value);
    this.listas.update(lista => [...lista, this.actividad.value])
    localStorage.setItem('actividades', JSON.stringify(this.listas));
    this.actividad.setValue('');
  }

  // borrar(pos: number){
  //   this.listas.splice(pos, 1);
  //   localStorage.clear();
  //   localStorage.setItem('actividades', JSON.stringify(this.listas))
  // }
  borrar(pos: number){
    this.listas.update(lista => {
      const nueva = [...lista];
      nueva.splice(pos,1);
      localStorage.setItem('actividades', JSON.stringify(nueva));
      return nueva;
    })
  }

  borrarTodas(){
    localStorage.clear();
    // this.listas = []
    this.listas.set([]);
  }

}
