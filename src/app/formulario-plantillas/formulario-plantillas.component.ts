import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-plantillas',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './formulario-plantillas.component.html',
  styleUrls: ['./formulario-plantillas.component.css']
})
export class FormularioPlantillasComponent implements OnInit {
  
  // art = {
  //   codigo: 0,
  //   descripcion: '',
  //   precio: 0
  // }

  // art = signal({
  //   codigo: 0,
  //   descripcion: '',
  //   precio: 0
  // })

  art: WritableSignal<{ codigo: number; descripcion: string; precio: number }> = signal({
  codigo: 0,
  descripcion: '',
  precio: 0
});

  articulos = signal<any[]>([
    {codigo: 1, descripcion: 'manzanas', precio: 12.10},
    {codigo: 2, descripcion: 'melon', precio: 52.3},
    {codigo: 3, descripcion: 'cebollas', precio: 17},
    {codigo: 4, descripcion: 'calabaza', precio: 20},
    {codigo: 5, descripcion: 'papas', precio: 10.55},
  ])

  // articulos = [
  //   {codigo: 2, descripcion: 'manzanas', precio: 12.10},
  //   {codigo: 3, descripcion: 'melon', precio: 53.30},
  //   {codigo: 4, descripcion: 'cebollas', precio: 17},
  //   {codigo: 5, descripcion: 'calabaza', precio: 20},
  // ]

  // hayRegistros(){
  //   return this.articulos().length > 0
  // }

  hayRegistros =  computed(() => this.articulos().length > 0);

  // borrar(codigo: number){
  //   for(let x = 0; x < this.articulos().length; x++){
  //     if(this.articulos()[x].codigo == codigo ){
  //       this.articulos.splice(x,1);
  //       return;
  //     }
  //   }
  // }

  borrar(codigo: number){
    console.log("este es el codigo del articulo a borrar", codigo);
    this.articulos.update(arts => arts.filter(a => a.codigo !== codigo));
    console.log("estos son los articulos", this.articulos());
  }

  agregar(){

    const nuevoArt = this.art();

    if(nuevoArt.codigo === 0){
      alert('Debe ingresar un codigo de articulo distinto a cero');
      return
    }
    
    const existe = this.articulos().some(a => a.codigo === nuevoArt.codigo);

    if(existe){
      alert('ya existe un articulo con dicho codigo');
      return;
    }

    this.articulos.update(arts => [...arts, {...nuevoArt}]);

    this.art.set({codigo: 0, descripcion: '', precio: 0});
  }

  // agregar(){
  //   if(this.art.codigo == 0){
  //     alert('Debe ingresar un codigo de articulo distinto a cero');
  //     return
  //   }
  //   for(let x = 0; x < this.articulos.length; x++){
  //     if(this.articulos[x].codigo === this.art.codigo){
  //       alert('ya existe un articulo con dicho codigo');
  //       return;
  //     }
  //   }
  //   this.articulos.push({
  //     codigo: this.art.codigo,
  //     descripcion: this.art.descripcion,
  //     precio: this.art.precio
  //   });

  //   this.art.codigo = 0;
  //   this.art.descripcion = '',
  //   this.art.precio = 0;

  // }

  // seleccionar(art: {codigo: number; descripcion: string; precio: number;}){
  //   this.art.codigo = art.codigo;
  //   this.art.descripcion = art.descripcion;
  //   this.art.precio = art.precio;
  // }

  input(e: any){
    console.log("lo que devuelve el evento", e);
  }

  seleccionar(art: any){
    this.art.set({...art});
  }

  // modificar(){
  //   for(let x=0; x < this.articulos.length; x++)
  //     if(this.articulos[x].codigo == this.art.codigo){
  //       this.articulos[x].descripcion = this.art.descripcion;
  //       this.articulos[x].precio = this.art.precio;
  //       return;
  //     }
  //     alert('No existe el odigo de articulo ingresado');
  // }

  modificar(){

    const articuloActual = this.art();
    let encontrado = false;

    this.articulos.update(arts => 
      arts.map(art => {
        if(art.codigo === articuloActual.codigo){
          encontrado = true;
          return {...art, descripcion: articuloActual.descripcion, precio: articuloActual.precio, }
        }
      })
    )

    if(!encontrado){
      alert("No existe el codigo de articulo ingresado");
      return
    }

    //Resetear el formulario
    this.art.set({codigo: 0, descripcion: '', precio: 0});


  }


  

  constructor() { }

  ngOnInit() {
  }

}
