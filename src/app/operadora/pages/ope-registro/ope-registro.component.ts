import { Component } from '@angular/core';
import { Operadora, OperadoraFormulario, Responsable } from '../../interfaces/interfaces-Operadora';

@Component({
  selector: 'app-ope-registro',
  templateUrl: './ope-registro.component.html',
  styleUrls: ['./ope-registro.component.css']
})
export class OpeRegistroComponent {

dataFormularioOpe: OperadoraFormulario =  {
  nombres: '',
  apellidos: '',
  email: '',
  telefono: '',
  nombreOpe: '',
  rucOpe: '',
  telefono1Ope: '',
  telefono2Ope: '',
  direccionOpe: '',
  observacionOpe: ''
} 

constructor(){ }


  registroOperadoraForm(operadoraFormulario: OperadoraFormulario){
     
    this.dataFormularioOpe = operadoraFormulario;

     const responsable: Responsable = {
         nombres : this.dataFormularioOpe.nombres,
         apellidos : this.dataFormularioOpe.apellidos,
         email: this.dataFormularioOpe.email,
         telefono : this.dataFormularioOpe.telefono ,
      }

      console.log({representate : responsable} );

      const operadora: Operadora  = {
         nombre: this.dataFormularioOpe.nombreOpe ,
         ruc: this.dataFormularioOpe.rucOpe ,
         telefono1: this.dataFormularioOpe.telefono1Ope ,
         telefono2: this.dataFormularioOpe.telefono2Ope ,
         direccion: this.dataFormularioOpe.direccionOpe ,
         observacion: this.dataFormularioOpe.observacionOpe 
      }

      console.log( {operador: operadora} );

     


      
  }
}
