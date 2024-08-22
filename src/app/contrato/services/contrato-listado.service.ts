
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isObservable, Observable, pipe } from 'rxjs';   

import { Contrato } from '../interface/contrato-listado.interfaces';
import { DatePipe, JsonPipe } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ContratosService {

  constructor(private http: HttpClient ) {}
    private contrato!:Contrato;
    
    public set contratoValue(cont : Contrato) {
        this.contrato = cont;
    }
    
    public get getContrato() : Contrato {
        return this.contrato;
    }   
    
    MisContratos: Contrato[] = [
    {
        dicon_codigo: '12',
        dicon_numero: 'CONT-1',
        dicon_fecha_inicio: new Date(1,1,2021),
        dicon_fecha_firma: new Date(),
        dicon_fecha_vencimiento: new Date(4,9,2021),
        dictp_codigo_tipo_contrato: 'Ductos',
        dicon_cantidad: 355,
        dicon_valor_total: 27357.66,
        dicon_cliente: 'Juan carlos mendoza ',
        dicon_estado: 'activo',
        dicon_operadoraa: "Movistar",
    },
    {
        dicon_codigo: '13',
        dicon_numero: 'CONT-2',
        dicon_fecha_inicio: new Date(2,1,2021),
        dicon_fecha_vencimiento: new Date(5,10,2022),
        dicon_fecha_firma:  new Date(2024, 7, 7),
        dictp_codigo_tipo_contrato: 'Ductos',
        dicon_cantidad: 4556,
        dicon_valor_total: 27357.66,
        dicon_cliente: 'Juan carlos mendoza ',
        dicon_estado: 'activo',
        dicon_observaciones:'',
        dicon_operadoraa: "Movistar",
    },
    {
        dicon_codigo: '14',
        dicon_numero: 'CONT-3',
        dicon_fecha_inicio: new Date(8,5,2023),
        dicon_fecha_vencimiento: new Date(7,7,2024),
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Postes',
        dicon_cantidad: 455744979.5,
        dicon_valor_total: 456,
        dicon_cliente: 'Juan Perico tutuka ',
        dicon_estado: 'activo',
        dicon_observaciones: 'todo preparado y listo para que funcione todo eldia de hoy',
        dicon_operadoraa: "Movistar",

    },     
    {
        dicon_codigo: '14',
        dicon_numero: 'CONT-4',
        dicon_fecha_inicio: new Date(4,1,2018),
        dicon_fecha_vencimiento: new Date(4,9,2020),
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Postes',
        dicon_cantidad: 1,
        dicon_valor_total: 458,
        dicon_cliente: 'Juan Perico tutuka ',
        dicon_estado: 'inactivo',
        dicon_observaciones: 'todo preparado y listo para que funcione todo eldia de hoy',
        dicon_operadoraa: "Movistar",
    },
    {
        dicon_codigo: '14',
        dicon_numero: 'CONT-5',
        dicon_fecha_inicio: new Date(5,1,2022),
        dicon_fecha_vencimiento: new Date(28,2,2024),
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Postes',
        dicon_cantidad: 200,
        dicon_valor_total: 4567,
        dicon_cliente: 'Juan Perico tutuka ',
        dicon_estado: 'activo',
        dicon_observaciones: 'todo preparado y listo para que funcione todo eldia de hoy',
        dicon_operadoraa: "Movistar",
    },
    {
        dicon_codigo: '14',
        dicon_numero: 'CONT-6',
        dicon_fecha_inicio: new Date(1,2,2019),
        dicon_fecha_vencimiento: new Date(4,9,2020),
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Postes',
        dicon_cantidad: 399,
        dicon_valor_total: 59,
        dicon_cliente: 'Juan Perico tutuka ',
        dicon_estado: 'activo',
        dicon_observaciones: 'todo preparado y listo para que funcione todo eldia de hoy',
        dicon_operadoraa: "Porta",
    },
    {
        dicon_codigo: '14',
        dicon_numero: 'CONT-7',
        dicon_fecha_inicio: new Date(9,4,2020),
        dicon_fecha_vencimiento: new Date(21,6,2020),
        dicon_fecha_firma: new Date(),
        dictp_codigo_tipo_contrato: 'Postes',
        dicon_cantidad: 4556,
        dicon_valor_total: 456,
        dicon_cliente: 'Juan Perico tutuka ',
        dicon_estado: 'activo',
        dicon_observaciones: 'todo preparado y listo para que funcione todo eldia de hoy',
        dicon_operadoraa: "Alegro",
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