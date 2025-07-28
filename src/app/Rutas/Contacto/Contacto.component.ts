import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  selector: 'app-Contacto',
  templateUrl: './Contacto.component.html',
  styleUrls: ['./Contacto.component.css']
})
export class ContactoComponent implements OnInit {


  datos = signal('')

  constructor() { }

  ngOnInit() {
  }

  fb = inject(FormBuilder);

  formularioContacto: FormGroup = this.fb.group({

    nombre: [''],
    mail: [''],
    mensaje: ['']

  });

  submit(){

    const {nombre, mail, mensaje} = this.formularioContacto.value;

    this.datos.set(
      `Nombre=${nombre}\nMail=${mail}\nMensaje=${mensaje}`
    )


  }

}
