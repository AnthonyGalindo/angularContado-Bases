import { Injectable } from '@angular/core';
import {
  listadoOperadora,
  Operadora,
  OperadoraFormulario,
} from '../interfaces/interfaces-Operadora';

@Injectable({ providedIn: 'root' })
export class OperadoraService {
  constructor() {}

  private arrOperadoras: listadoOperadora[] = [
    {
      position: '1',
      nombre: 'Movistar',
      ruc: '145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Eduardo Reyes',
    },
    {
      position: '2',
      nombre: 'Claro',
      ruc: '145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Carlos Villagran',
    },
    {
      position: '3',
      nombre: 'Cnt',
      ruc: '145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Edgar vivar',
    },
    {
      position: '4',
      nombre: 'Twenti',
      ruc: '9145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Roberto Gomez',
    },
    {
      position: '5',
      nombre: 'Aki',
      ruc: '1145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Roberto Gomez',
    },
    {
      position: '6',
      nombre: 'Netlife',
      ruc: '145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Roberto Gomez',
    },
    {
      position: '7',
      nombre: 'Speedy',
      ruc: '145446478912',
      telefono1: '12234567',
      telefono2: '7894531',
      representante: 'Roberto Gomez',
    },
    {
      position: '8',
      nombre: 'Aki',
      ruc: '145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Roberto Gomez',
    },
    {
      position: '9',
      nombre: 'Netlife',
      ruc: '145446478912',
      telefono1: '1234567',
      telefono2: '7894561',
      representante: 'Roberto Gomez',
    },
    {
      position: '10',
      nombre: 'Speedy',
      ruc: '145446478912',
      telefono1: '12234567',
      telefono2: '7894531',
      representante: 'Pedro Marin',
    },
  ];
  private operadoras: Operadora[] = [
    {
      nombre: 'Movistar',
      ruc: '89123',
      telefono1: '',
      telefono2: '',
      direccion: '',
      responsable: {
        nombres: '',
        apellidos: '',
        email: '',
        telefono: '',
      },
      idOperadora: 111,
    },

    {
      nombre: 'Cnt',
      ruc: '90456',
      telefono1: '',
      telefono2: '',
      direccion: '',
      responsable: {
        nombres: '',
        apellidos: '',
        email: '',
        telefono: '',
      },
      idOperadora: 222,
    },

    {
      nombre: 'TvCable',
      ruc: '91789',
      telefono1: '',
      telefono2: '',
      direccion: '',
      responsable: {
        nombres: '',
        apellidos: '',
        email: '',
        telefono: '',
      },
      idOperadora: 333,
    },
  ];
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
    observacionOpe: '',
  };
  public get dataOperadoraEdicion(): OperadoraFormulario {
    return { ...this.varOperadoraEdicion };
  }
  public get g_listado_operadora_s(): listadoOperadora[] {
    return [...this.arrOperadoras];
  }
  public get g_operadoras_s(): Operadora[] {
    return [...this.operadoras];
  }
  public set s_listado_operadora_s(operadora: listadoOperadora) {
    this.arrOperadoras.push(operadora);
  }

  sendOperadoraRegistro() {
    // TODO: ENVIO DE LA DATA DEL FORMULARIO REGISTRO OPERADORA
  }
}
