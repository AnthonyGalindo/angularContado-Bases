import {  Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Contrato } from 'src/app/contrato/interface/contrato-listado.interfaces';
import { DocumentoContrato } from '../../interfaces/documento.interface';
import { DocumentoEditService } from '../../services/documento-edit.service';

@Component({
  selector: 'doc-comp-listado-contratos',
  templateUrl: './doc-comp-listado-contratos.component.html',
  styleUrls: ['./doc-comp-listado-contratos.component.css']
})
export class DocCompListadoContratosComponent  {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private router:Router,
    private docEdit: DocumentoEditService,
  ) {}

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

  ngOnInit(): void {
    this.dataSource.data = [ 
      { cod:'doc-1cc',ncontrato:'cont-148', tipo_documento:'tipo-3', documento:'contrato.doc45',descripcion: '...' , fecha:new Date().toLocaleDateString() },
      { cod:'doc-2cc',ncontrato:'cont-1457',tipo_documento:'tipo-3', documento:'contrato.exel', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      { cod:'doc-3cc',ncontrato:'cont-149', tipo_documento:'tipo-3', documento:'contrato.algo', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      { cod:'doc-4cc',ncontrato:'cont-1410',tipo_documento:'tipo-1', documento:'contrato.doc1', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      { cod:'doc-5cc',ncontrato:'cont-1411',tipo_documento:'tipo-1', documento:'contrato.doc2', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      { cod:'doc-1cc',ncontrato:'cont-1411',tipo_documento:'tipo-1', documento:'contrato.doc3', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      { cod:'doc-1cc',ncontrato:'cont-1411',tipo_documento:'tipo-1', documento:'contrato.doc4', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      { cod:'doc-1cc',ncontrato:'cont-1411',tipo_documento:'tipo-1', documento:'contrato.doc5', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      { cod:'doc-1cc',ncontrato:'cont-1411',tipo_documento:'tipo-1', documento:'contrato.doc6', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      { cod:'doc-1cc',ncontrato:'cont-1411',tipo_documento:'tipo-1', documento:'contrato.doc7', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      { cod:'doc-1cc',ncontrato:'cont-1411',tipo_documento:'tipo-1', documento:'contrato.doc8', descripcion: '...' , fecha:new Date().toLocaleDateString() },
      { cod:'doc-1cc',ncontrato:'cont-1411',tipo_documento:'tipo-1', documento:'contrato.doc9', descripcion: '...' , fecha:new Date().toLocaleDateString() },
     ]
  }

dataSource = new MatTableDataSource<any>();
displayedColumns: string[] = ['ncontrato','tipo_documento','documento','descripcion','fecha','acciones'];

public aplicarFiltro(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

public editarContrato(elemento:DocumentoContrato) {
  console.log(elemento);
  // this.docEdit.documentoContrato = elemento;ng 
  
  this.docEdit.sdocumentosContrato = elemento ;
  this.router.navigateByUrl('/documento/cambiar');
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
