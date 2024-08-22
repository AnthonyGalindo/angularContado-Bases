import { Injectable } from '@angular/core';
import { TIPO_PAGO } from '../interfaces/pago.interface';

@Injectable({providedIn: 'root'})
export class TipoPagoService {
    public tipo_pago: TIPO_PAGO[] = [
        {
            TIPPAG_ID: 0,
            TIPPAG_NOMBRE: 'Efectivo',
            TIPPAG_ACTIVO: true
        },
        {
            TIPPAG_ID: 1,
            TIPPAG_NOMBRE: 'Targeta',
            TIPPAG_ACTIVO: false
        },

    ];
    
    public get gtipo_pago() : TIPO_PAGO[]  {
        return [...this.tipo_pago];
    }
    
    public set stipo_pago(ele : TIPO_PAGO) {
        this.tipo_pago.push(ele);
    }
    
    constructor() { }
    
}