import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo-two',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './formulario-reactivo-two.component.html',
  styleUrls: ['./formulario-reactivo-two.component.css']
})
export class FormularioReactivoTwoComponent implements OnInit {


  datos = '';
  // datos = signal('');

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl('')
  });

  submit(){
    this.datos = `Nombre=${this.formularioContacto.value.nombre}
                  Mail=${this.formularioContacto.value.mail}
                  Mensaje=${this.formularioContacto.value.mensaje} 
                  `;
  }


  constructor() { }

  ngOnInit() {
  }

}
