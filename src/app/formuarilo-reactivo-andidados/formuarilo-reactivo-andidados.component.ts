import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formuarilo-reactivo-andidados',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formuarilo-reactivo-andidados.component.html',
  styleUrls: ['./formuarilo-reactivo-andidados.component.css']
})
export class FormuariloReactivoAndidadosComponent implements OnInit {

  resultado= '';

  formAlumno =  new FormGroup({
    dni:  new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl('')
    })
  });

  submit(){
    if(this.formAlumno.value.notas){
      if(this.formAlumno.value.notas.nota1 &&
         this.formAlumno.value.notas.nota2 &&
         this.formAlumno.value.notas.nota3 
      )
      {
        let nota1 = parseInt(this.formAlumno.value.notas.nota1);
        let nota2 = parseInt(this.formAlumno.value.notas.nota2);
        let nota3 = parseInt(this.formAlumno.value.notas.nota3);

        if(nota1 >= 4 && nota2 >= 4 && nota3 >= 4)
          this.resultado = "El alumno queda aprobado por esas notas";
        else  
          this.resultado = "El alumno no aprueba por esas notas"
      }
    }

  }


  constructor() { }

  ngOnInit() {
  }

}
