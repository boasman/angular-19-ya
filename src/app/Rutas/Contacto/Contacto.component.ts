import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  selector: 'app-Contacto',
  templateUrl: './Contacto.component.html',
  styleUrls: ['./Contacto.component.css']
})
export class ContactoComponent implements OnInit {

  datos  = signal<string>('');

  constructor() { }

  ngOnInit() {
  }

  fb = inject(FormBuilder);

  formularioContacto = new FormGroup({

    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl('')

  });

  submit(){
    this.datos.update(result => `Nombre=${this.formularioContacto.value.nombre}
                Mail=${this.formularioContacto.value.mail}
                Mensaje=${this.formularioContacto.value.mensaje}
                `);
  }

}
