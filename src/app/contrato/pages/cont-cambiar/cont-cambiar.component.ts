import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PruebaLista } from '../../interface/contrato-interfaces';
import { ServiceContrato } from '../../services/contrato.service';

@Component({
  selector: 'app-cont-cambiar',
  templateUrl: './cont-cambiar.component.html',
  styleUrls: ['./cont-cambiar.component.css']
})
export class ContCambiarComponent {
  tablaCalculadaMes: PruebaLista[] = [];

  constructor(private fb: FormBuilder, private sc: ServiceContrato) {
    console.log(this.tablaCalculadaMes);
  }

  public columnas: string[] = [
    // 'Mes',
    'ValorMes',
    // 'Iva',
    'ValorTotalMensual',
  ];

  public data_table = this.sc.getTabla_contrato;
  dataSource = new MatTableDataSource(this.data_table);

  months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  public cargarValoresArray(): void {
    console.log(this.tablaCalculadaMes);
  }

}
