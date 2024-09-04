import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Contrato } from 'src/app/contrato/interface/contrato-listado.interfaces';

@Component({
  selector: 'doc-comp-listado-extensiones',
  templateUrl: './doc-comp-listado-extensiones.component.html',
  styleUrls: ['./doc-comp-listado-extensiones.component.css']
})
export class DocCompListadoExtensionesComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  public operdadora = [
    {
      tipo_id: 'Movistar',
      tipo_nombre: 'Contrato de Alquiler',
    },
    {
      tipo_id: 'Cnt',
      tipo_nombre: 'Contrato de Extension',
    },
  ];

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  constructor(private router:Router) {}
  ngOnInit(): void {
    this.dataSource.data = [
      {nextension:'ext-148', tipo_documento:'tipo-3', documento:'contrato.doc45',descripcion: '...' , fecha:new Date().toLocaleDateString() },
      {nextension:'ext-1457',tipo_documento:'tipo-3', documento:'contrato.exel', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      {nextension:'ext-149', tipo_documento:'tipo-3', documento:'contrato.algo', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      {nextension:'ext-1410',tipo_documento:'tipo-1', documento:'contrato.doc1', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      {nextension:'ext-1411',tipo_documento:'tipo-1', documento:'contrato.doc2', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      {nextension:'ext-1411',tipo_documento:'tipo-1', documento:'contrato.doc3', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      {nextension:'ext-1411',tipo_documento:'tipo-1', documento:'contrato.doc4', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      {nextension:'ext-1411',tipo_documento:'tipo-1', documento:'contrato.doc5', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      {nextension:'ext-1411',tipo_documento:'tipo-1', documento:'contrato.doc6', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      {nextension:'ext-1411',tipo_documento:'tipo-1', documento:'contrato.doc7', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      {nextension:'ext-1411',tipo_documento:'tipo-1', documento:'contrato.doc8', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      {nextension:'ext-1411',tipo_documento:'tipo-1', documento:'contrato.doc9', descripcion: '...' , fecha:new Date().toLocaleDateString() },
     ]
  }

dataSource = new MatTableDataSource<any>();
displayedColumns: string[] = ['nextension','tipo_documento','documento','descripcion','fecha','acciones'];

public aplicarFiltro(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

public editarContrato(extension:any) {
  this.router.navigateByUrl('/shared/documento/cambiar-ext');
}

public contratos: Contrato[] = [
  {
    dicon_codigo: 'M4758',
    dicon_numero: '',
    dicon_fecha_inicio: undefined,
    dicon_fecha_firma: undefined,
    dictp_codigo_tipo_contrato: 'Ductos',
    dicon_cantidad: 0,
    dicon_valor_total: 0,
    dicon_cliente: '',
    dicon_fecha_vencimiento: undefined,
    dicon_estado: 'activo',
    dicon_operadoraa: 'Movistar',
  },
  {
    dicon_codigo: 'M3415',
    dicon_numero: '',
    dicon_fecha_inicio: undefined,
    dicon_fecha_firma: undefined,
    dictp_codigo_tipo_contrato: 'Postes',
    dicon_cantidad: 0,
    dicon_valor_total: 0,
    dicon_cliente: '',
    dicon_fecha_vencimiento: undefined,
    dicon_estado: 'activo',
    dicon_operadoraa: 'Netlife',
  },
];

}
