import { MatDateFormats } from "@angular/material/core";
import { MatMonthView } from "@angular/material/datepicker";


export interface Provincia {
    viewValue: string,
    value: number
} 
export interface Canton {
    idProvincia:number,
    viewValue: string,
    value: number
} 
export interface Parroquia {
    idParroquia:number,
    viewValue: string,
    value: number
} 
export interface Tipo_Contrato {
    nombre:string,
    descripcion:string,
    valorUnitario: number,
}
export interface TablaContrato {
    vigencia: string| null;
    cantidad: number,
    valor: number,
    subTotal: number,
    ubicacion: string,
    tipoContrato: string,

}

export interface PruebaLista {
    valor  :  number,
    valorTotal :  number,
}

export interface DialogData {
    animal: string;
    name: string;
  }