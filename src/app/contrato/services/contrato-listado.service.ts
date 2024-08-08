
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isObservable, Observable, pipe } from 'rxjs';   

import { Contrato } from '../interface/contrato-listado.interfaces';
import { DatePipe, JsonPipe } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ContratosService {

  constructor(private http: HttpClient ) {}
  
    MisContratos: Contrato[] = [
    {
        dicon_codigo: '12',
        dicon_numero: '457ms',
        dicon_vigencia: '04/01/1997',
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Ductos',
        dicon_cantidad: 4556,
        dicon_valor_total: 27357.66,
        dicon_cliente: 'Juan carlos mendoza ',
        dicon_estado: 'activo'
    },
    {
        dicon_codigo: '13',
        dicon_numero: '45a7ms',
        dicon_vigencia: '05/08/2023',
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Ductos',
        dicon_cantidad: 4556,
        dicon_valor_total: 27357.66,
        dicon_cliente: 'Juan carlos mendoza ',
        dicon_estado: 'activo',
        dicon_observaciones:''
    },
    {
        dicon_codigo: '14',
        dicon_numero: '457ms',
        dicon_vigencia: '07/07/1992',
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Postes',
        dicon_cantidad: 4556,
        dicon_valor_total: 456,
        dicon_cliente: 'Juan Perico tutuka ',
        dicon_estado: 'activo',
        dicon_observaciones: 'todo preparado y listo para que funcione todo eldia de hoy'
    },
    {
        dicon_codigo: '14',
        dicon_numero: '457ms',
        dicon_vigencia: '07/07/1992',
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Postes',
        dicon_cantidad: 4556,
        dicon_valor_total: 456,
        dicon_cliente: 'Juan Perico tutuka ',
        dicon_estado: 'activo',
        dicon_observaciones: 'todo preparado y listo para que funcione todo eldia de hoy'
    },
    {
        dicon_codigo: '14',
        dicon_numero: '457ms',
        dicon_vigencia: '07/07/1992',
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Postes',
        dicon_cantidad: 4556,
        dicon_valor_total: 456,
        dicon_cliente: 'Juan Perico tutuka ',
        dicon_estado: 'activo',
        dicon_observaciones: 'todo preparado y listo para que funcione todo eldia de hoy'
    },
    {
        dicon_codigo: '14',
        dicon_numero: '457ms',
        dicon_vigencia: '07/07/1992',
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Postes',
        dicon_cantidad: 4556,
        dicon_valor_total: 456,
        dicon_cliente: 'Juan Perico tutuka ',
        dicon_estado: 'activo',
        dicon_observaciones: 'todo preparado y listo para que funcione todo eldia de hoy'
    },
    {
        dicon_codigo: '14',
        dicon_numero: '457ms',
        dicon_vigencia: '07/07/1992',
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Postes',
        dicon_cantidad: 4556,
        dicon_valor_total: 456,
        dicon_cliente: 'Juan Perico tutuka ',
        dicon_estado: 'activo',
        dicon_observaciones: 'todo preparado y listo para que funcione todo eldia de hoy'
    },
]


//   getContratos(): Observable<Contrato[]> {
//     return this.http.get<Contrato[]>('api/contratos');   
//   }

 get  getContratos(): Contrato[] {
    // return this.http.get<Contrato[]>('api/contratos');   
    return [...this.MisContratos]  ;

  }
}