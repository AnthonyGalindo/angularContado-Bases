import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Contrato } from '../../interface/contrato-listado.interfaces';
import { SelectionModel } from '@angular/cdk/collections';
import { ContratosService } from '../../services/contrato-listado.service';
import { MatTableDataSource } from '@angular/material/table';
import { JsonPipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';

@Component({
  selector: 'cont-comp-lista-contrato',
  templateUrl: './cont-comp-lista-contrato.component.html',
  styleUrls: ['./cont-comp-lista-contrato.component.css'],
})
export class ContCompListaContratoComponent implements AfterViewInit {

  contratos: Contrato[] = [];

  seleccionada: SelectionModel<Contrato> = new SelectionModel<Contrato>( true, [] );
  displayedColumns: string[] = [
    'dicon_numero',
    'dicon_vigencia',
    'dicon_fecha_firma',
    'dictp_codigo_tipo_contrato',
    'dicon_operadoraa',
    'dicon_cantidad',
    'dicon_valor_total_Mes',
    'dicon_valor_total',
    'dicon_observaciones',
    'select',
    'acciones'
   ];
  dataSource = new MatTableDataSource<Contrato>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private contratosService: ContratosService,
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contratos = this.contratosService.getContratos;
    this.dataSource.data = this.contratos;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
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

  editarContrato(contrato: Contrato) {
    console.log( contrato );
    this.contratosService.contratoValue = contrato;
    this.router.navigate(['/shared/contrato/cambiar']);
  }

}
