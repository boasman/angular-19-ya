import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validaciones-standar',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './validaciones-standar.component.html',
  styleUrls: ['./validaciones-standar.component.css']
})
export class ValidacionesStandarComponent implements OnInit {

  resultado =  '';

  formularioContacto  = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(10)]),
    mail: new FormControl('',[Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)])    
  })

  submit(){
    if(this.formularioContacto.valid)
      this.resultado = "Todos los datos son validos";
    else  
      this.resultado = "Hay datos invalidos en el formulario"
  }
  constructor() { }

  ngOnInit() {
  }

}
