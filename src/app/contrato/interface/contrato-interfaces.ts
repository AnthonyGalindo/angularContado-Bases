

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