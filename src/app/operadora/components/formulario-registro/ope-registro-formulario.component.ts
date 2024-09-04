
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Operadora, OperadoraFormulario, Responsable } from '../../interfaces/interfaces-Operadora';

@Component({
    selector: 'ope-registro-formulario',
    templateUrl: 'ope-registro-formulario.component.html',
    styleUrls: ['ope-registro-formulario.component.css'] 
})

export class OperRegistroFormularioComponent
  {

   @Output() myEventOperadora = new EventEmitter(); 


      constructor( private fb: FormBuilder) { }

    public operadoraForm:FormGroup = this.fb.group({
       nombres: [''],
       apellidos: [''],
       email: [''],
       telefono: [''],
       nombreOpe: [''],
       rucOpe: [''],
       telefono1Ope: [''],
       telefono2Ope: [''],
       direccionOpe: [''],
       observacionOpe: [''],

     });


     sendFormularioOperadora(){
      // console.log(this.operadoraForm.value);
      const operadoraFormulario : OperadoraFormulario = this.operadoraForm.value;
      this.myEventOperadora.emit(operadoraFormulario);

     }
  }