import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivos-three',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './formulario-reactivos-three.component.html',
  styleUrls: ['./formulario-reactivos-three.component.css']
})
export class FormularioReactivosThreeComponent implements OnInit {

 conversion= ''
 potenciaNumero = ''
 cantidad = ''

 formularioConversion = new FormGroup({
  numeroDecimal: new FormControl(''),
  base: new FormControl(''),
  potencia: new FormControl(''),
  largo: new FormControl(true)  
 });

 submit(){

  if(this.formularioConversion.value.numeroDecimal){
    debugger
    if(this.formularioConversion.value.base == 'Hexadecimal'){
      this.conversion =  parseInt(this.formularioConversion.value.numeroDecimal).toString(16);
    }

    if(this.formularioConversion.value.base ==  'octal'){
      this.conversion =  parseInt(this.formularioConversion.value.numeroDecimal).toString(8);      
    }

    if(this.formularioConversion.value.numeroDecimal && this.formularioConversion.value.potencia){
      this.potenciaNumero = Math.pow(parseInt(this.formularioConversion.value.numeroDecimal), parseInt(this.formularioConversion.value.potencia)).toString();
    }

    if(this.formularioConversion.value.largo){
      this.cantidad =  this.formularioConversion.value.numeroDecimal.length.toString();
    }







  }
 }



  constructor() { }

  ngOnInit() {
  }

}
