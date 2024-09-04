import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { listadoOperadora } from '../../interfaces/interfaces-Operadora';
import { OperadoraService } from '../../services/operadora.service';

@Component({
  selector: 'ope-listado-operadora',
  templateUrl: './listado-operadora.component.html',
  styleUrls: ['./listado-operadora.component.css'],
})
export class ListadoOperadoraComponent implements OnInit, AfterViewInit {
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router,
    private operadoraService: OperadoraService ) {}

  displayedColumnss: string[] = [
    'position',
    'nombre',
    'ruc',
    'telefono1',
    'telefono2',
    'representante',
    'icons',
  ];

   dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.data = this.operadoraService.g_listado_operadora_s;
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

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editarOperadora(elemento: listadoOperadora) {
    console.log(elemento);
    this.router.navigate(['shared/operadora/editar', elemento]);
  }
}
