import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PruebaLista } from '../../interface/contrato-interfaces';

@Component({
  selector: 'cont-comp-tabla-mensual',
  templateUrl: './cont-comp-tabla-mensual.component.html',
  styleUrls: ['./cont-comp-tabla-mensual.component.css']
})
export class ContCompTablaMensualComponent {

  /**
   *
   */
  constructor() {
    this.cargarValoresArray()
    
  }

  public columnas: string[] =[
    'Mes',
    'ValorMes',
    'Iva',
    'ValorTotalMensual',
  ]

  public arreglo_tabla_mensual: PruebaLista[] = [] ;

  public data_table = [
    {
      mes: 'ENERO',
      valorMes: 1000,
      iva: 122,
      valorTotalMensual: 1100
    },

   
  ]

  dataSource = new MatTableDataSource( this.data_table )


  months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  public cargarValoresArray(): void {
  
    for (let i = 0; i < 11; i++) {
      this.data_table.push( { 
      mes: this.months[i],
      valorMes: 1000,
      iva: 122,
      valorTotalMensual: 1100  
    })
  }
}

}
