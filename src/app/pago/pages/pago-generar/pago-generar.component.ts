import { Component } from '@angular/core';
import { TIPO_PAGO } from '../../interfaces/pago.interface';
import { TipoPagoService } from '../../services/tipo-pago.service';
import { ContratosService } from 'src/app/contrato/services/contrato-listado.service';
import { Contrato } from 'src/app/contrato/interface/contrato-listado.interfaces';
import { FormBuilder } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-pago-generar',
  templateUrl: './pago-generar.component.html',
  styleUrls: ['./pago-generar.component.css'],
})

export class PagoGenerarComponent {
  public tipo_pago: TIPO_PAGO[] = [];
  public contratos: Contrato[] = [];
  public total = 0;

  constructor(
    private fb: FormBuilder,
    private tipoPagoSer: TipoPagoService,
    private contratoSer: ContratosService
  ) {}

  ngOnInit() {
    this.tipo_pago = this.tipoPagoSer.gtipo_pago;
    this.contratos = this.contratoSer.getContratos;
    this.recibirFechaInicio();
  }

  formPago = this.fb.group({
    fecha_pago_inicio: [ new Date() ],
    fecha_pago_now: [ new Date() || null ],
    n_meses: [0],
  });

  sendFormularioPago() {
    console.log(this.formPago.get('fecha_pago_inicio')?.value);
    let vfecha_pago_hasta: Date | null =
      this.formPago.get('fecha_pago_inicio')!.value;
    const meses = vfecha_pago_hasta!.getMonth() + 1;
    this.calcular();
  }
  public recibirFechaInicio() {
    const fechaInicio_contrato = this.getFecInicio();
    this.formPago.get('fecha_pago_inicio')?.setValue( new Date(
                      fechaInicio_contrato.getFullYear(),
                      fechaInicio_contrato.getMonth(),
                      fechaInicio_contrato.getUTCDate()
        ));
    console.log(
      this.getFecInicio().getFullYear(),
      this.getFecInicio().getMonth(),
      this.getFecInicio().getUTCDate()
    );
    this.calcular();
  }
  private calcularMesesCompletos(
    fechaInicio: Date | null,
    fechaActual: Date
  ): string {
    if (fechaInicio === null) {
      this.formPago.value.n_meses = 0;
      return '';
    }
    if (fechaActual < fechaInicio) {
      this.formPago.get('n_meses')?.setValue(0);
      return '0';
    }
    // Calcular la diferencia de años y meses entre las fechas
    const diferenciaAnios =
      fechaActual.getFullYear() - fechaInicio.getFullYear();
    const diferenciaMeses =
      fechaActual.getMonth() - fechaInicio.getMonth() + diferenciaAnios * 12;
    // Ajuste si el día del mes actual es menor que el día de inicio
    if (fechaActual.getDate() < fechaInicio.getDate()) {
      this.formPago.get('n_meses')?.setValue(diferenciaMeses - 1);
      return `Han pasado ${diferenciaMeses - 1} mese completos.`;
    }
    this.formPago.get('n_meses')?.setValue(diferenciaMeses);
    return `Han pasado ${diferenciaMeses} meses completos.`;
  }
  public cambioFechaPago(eventoFecha: Date) {
    console.log(eventoFecha);
    this.calcular();
  }
  private calcular() {
    // Fecha Inicio
    const fechaInicio = this.formPago.value!.fecha_pago_inicio;
    // Fecha Actual
    const fechaActual = this.formPago.value!.fecha_pago_now;
    // Fecha de fin
    const meses = this.calcularMesesCompletos(fechaInicio!, fechaActual!);
    console.log(`Número de meses entre las fechas: ${meses}`);
  }
  private getFecInicio(): Date {
    return this.contratoSer.getContratos[0].dicon_fecha_inicio!;
  }

  // TODO METODOS QUE PERTENECEN AL LISTADO QUE VA HACER UN COMPONENTE
  
}
