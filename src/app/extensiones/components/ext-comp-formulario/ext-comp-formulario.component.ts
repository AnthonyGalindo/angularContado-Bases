import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/contrato/interface/contrato-listado.interfaces';
import { OperadoraService } from 'src/app/operadora/services/operadora.service';

@Component({
  selector: 'ext-comp-formulario',
  templateUrl: './ext-comp-formulario.component.html',
  styleUrls: ['./ext-comp-formulario.component.css'],
})
export class ExtCompFormularioComponent implements OnInit {
  constructor( private operadoraService: OperadoraService ) {}

  ngOnInit(): void {}
  
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
  public retornarFecha(fecha: Date) {
    console.log(typeof fecha);
    console.log(fecha.toLocaleDateString());
    console.log(typeof fecha.toLocaleDateString());
  }
}
