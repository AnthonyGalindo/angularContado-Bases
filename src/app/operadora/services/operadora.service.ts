import { Injectable } from '@angular/core';
import { OperadoraFormulario } from '../interfaces/interfaces-Operadora';

@Injectable({providedIn: 'root'})

export class ServiceNameService {

    constructor() { }

   private varOperadoraEdicion: OperadoraFormulario = {
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

    
    public get dataOperadoraEdicion() : OperadoraFormulario {
         return {...this.varOperadoraEdicion};
    }
    

     sendOperadoraRegistro() {
        // TODO: ENVIO DE LA DATA DEL FORMULARIO REGISTRO OPERADORA
    }
    
}