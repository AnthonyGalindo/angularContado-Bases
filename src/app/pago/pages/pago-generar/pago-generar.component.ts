import { Component } from '@angular/core';
import { TIPO_PAGO } from '../../interfaces/pago.interface';
import { TipoPagoService } from '../../services/tipo-pago.service';
import { ContratosService } from 'src/app/contrato/services/contrato-listado.service';
import { Contrato } from 'src/app/contrato/interface/contrato-listado.interfaces';

@Component({
  selector: 'app-pago-generar',
  templateUrl: './pago-generar.component.html',
  styleUrls: ['./pago-generar.component.css'],
})
export class PagoGenerarComponent {
  public tipo_pago: TIPO_PAGO[] = [];
  public contratos: Contrato[] = [];

  constructor(private tipoPagoSer: TipoPagoService,
   private contratoSer:ContratosService,
  ) {}

  ngOnInit() {
    this.tipo_pago = this.tipoPagoSer.gtipo_pago;
    this.contratos = this.contratoSer.getContratos;
  }
}
