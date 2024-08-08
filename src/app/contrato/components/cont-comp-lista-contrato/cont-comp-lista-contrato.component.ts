import { Component } from '@angular/core';
import { Contrato } from '../../interface/contrato-listado.interfaces';
import { SelectionModel } from '@angular/cdk/collections';
import { ContratosService } from '../../services/contrato-listado.service';
import { MatTableDataSource } from '@angular/material/table';
import { JsonPipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'cont-comp-lista-contrato',
  templateUrl: './cont-comp-lista-contrato.component.html',
  styleUrls: ['./cont-comp-lista-contrato.component.css'],
})
export class ContCompListaContratoComponent {

  contratos: Contrato[] = [];

  seleccionada: SelectionModel<Contrato> = new SelectionModel<Contrato>( true, [] );
  displayedColumns: string[] = [
    'dicon_numero',
    'dicon_vigencia',
    'dicon_operadora',
    'dicon_fecha_firma',
    'dictp_codigo_tipo_contrato',
    'dicon_cantidad',
    'dicon_valor_total_Mes',
    'dicon_valor_total',
    'dicon_observaciones',
    'select',
    'acciones'
   ];
  dataSource = new MatTableDataSource<Contrato>();
  constructor(
    private contratosService: ContratosService,
  ) {}
  
  ngOnInit(): void {
    this.contratos = this.contratosService.getContratos;
    this.dataSource.data = this.contratos;
  }
  
  getSelectedRowInfo(): void {
    const selectedRows = this.seleccionada.selected;
    if (selectedRows.length > 0) {
      selectedRows.forEach((row: Contrato) => {
        console.log(new JsonPipe().transform(row));
      });
    } else {
      console.log('No hay filas seleccionadas');
    }
  }
  
  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
