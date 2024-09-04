import { Injectable } from '@angular/core';
import { PruebaLista } from '../interface/contrato-interfaces';

@Injectable({providedIn: 'root'})
export class ServiceContrato {

    private arr_Tabla_contrato: PruebaLista[] = [];
    constructor() { }


    
    public get getTabla_contrato() : PruebaLista[] {
        return this.arr_Tabla_contrato;
    }

    
    public set setTabla_contrato (arr : PruebaLista[]) {
        this.arr_Tabla_contrato = [...arr];
    }
    
    
    
}