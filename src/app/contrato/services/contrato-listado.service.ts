
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isObservable, Observable } from 'rxjs';   

import { Contrato } from '../interface/contrato-listado.interfaces';

@Injectable({ providedIn: 'root' })
export class ContratosService {

    MisContratos: Contrato[] = [
    {
        dicon_codigo: '12',
        dicon_numero: '457ms',
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Ductos',
        dicon_cantidad: 4556,
        dicon_valor_total: 456,
        dicon_cliente: 'Juan carlos mendoza ',
        dicon_estado: 'activo'
    },
    {
        dicon_codigo: '13',
        dicon_numero: '45a7ms',
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Ductos',
        dicon_cantidad: 4556,
        dicon_valor_total: 456,
        dicon_cliente: 'Juan carlos mendoza ',
        dicon_estado: 'activo'
    },
    {
        dicon_codigo: '14',
        dicon_numero: '457ms',
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Postes',
        dicon_cantidad: 4556,
        dicon_valor_total: 456,
        dicon_cliente: 'Juan Perico tutuka ',
        dicon_estado: 'activo'
    },
]
  constructor(private http: HttpClient) {}

//   getContratos(): Observable<Contrato[]> {
//     return this.http.get<Contrato[]>('api/contratos');   
//   }

 get  getContratos(): Contrato[] {
    // return this.http.get<Contrato[]>('api/contratos');   
    return [...this.MisContratos]  ;
 // Ajusta la URL según tu backend
  }
}