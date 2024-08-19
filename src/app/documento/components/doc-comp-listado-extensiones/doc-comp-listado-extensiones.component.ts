import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Contrato } from 'src/app/contrato/interface/contrato-listado.interfaces';

@Component({
  selector: 'doc-comp-listado-extensiones',
  templateUrl: './doc-comp-listado-extensiones.component.html',
  styleUrls: ['./doc-comp-listado-extensiones.component.css']
})
export class DocCompListadoExtensionesComponent {

  public tipoContratos = [
    {
      tipo_id: '1224qwe',
      tipo_nombre: 'Contrato de Alquiler',
    },
    {
      tipo_id: '777887qr',
      tipo_nombre: 'Contrato de Extension',
    },
  ];

  constructor(private router:Router) {}
  ngOnInit(): void {
    this.dataSource.data = [ 
      {nombre:'1',cantidad_v: 0 ,cantidad: 2000,autorizacion:'autoriza1234', fecha:new Date().toLocaleDateString(), v_unitario: 0.66},
      {nombre:'1',cantidad_v: 0 ,cantidad: 4897,autorizacion:'autoriza1234', fecha:new Date().toLocaleDateString(), v_unitario: 0.66},
      {nombre:'1',cantidad_v: 2000 ,cantidad: 3898,autorizacion:'autoriza1234', fecha:new Date().toLocaleDateString(), v_unitario: 0.66},
      {nombre:'1',cantidad_v: 0 ,cantidad: 12997,autorizacion:'autoriza1234', fecha:new Date().toLocaleDateString(), v_unitario:0.66},
      {nombre:'1',cantidad_v: 0 ,cantidad: 4891,autorizacion:'autoriza1234', fecha:new Date().toLocaleDateString(), v_unitario: 0.66},
     ];
  }

dataSource = new MatTableDataSource<any>();
displayedColumns: string[] = ['nombre','cantidad', 'cantidad_v', 'cantidadTotal', 'v_unitario','total_mensual', 'total_anual', 'autorizacion','fecha','acciones'];

aplicarFiltro(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

editarContrato(extension:any) {
  console.log('veamosd'); 
  console.log(extension);
  this.router.navigateByUrl('/extension/editar');
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
