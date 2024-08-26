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
   private contratoSer: ContratosService,
  ) {}

  ngOnInit() {
    this.tipo_pago = this.tipoPagoSer.gtipo_pago;
    this.contratos = this.contratoSer.getContratos;
  }

  formPago = this.fb.group({
    fecha_pago_hasta: [new Date || null],
    n_meses : [0]
  });

  sendFormularioPago() {
    console.log( this.formPago.get('fecha_pago_hasta')?.value );
    let vfecha_pago_hasta: Date | null = this.formPago.get('fecha_pago_hasta')!.value  ;
    const meses = vfecha_pago_hasta!.getMonth() + 1 ;

  this.calcular();
  };

  private calcularMesesCompletos(fechaInicio: Date | null, fechaActual: Date): string {

    if(fechaInicio === null) {
      this.formPago.value.n_meses = 0;
      return '';
    } 
    if(fechaActual < fechaInicio){
      this.formPago.value.n_meses = 0;
      return '0';
    }
    // Calcular la diferencia de años y meses entre las fechas
    const diferenciaAnios = fechaActual.getFullYear() - fechaInicio.getFullYear();
    const diferenciaMeses  = fechaActual.getMonth() - fechaInicio.getMonth() + diferenciaAnios * 12;
    // Ajuste si el día del mes actual es menor que el día de inicio
    if (fechaActual.getDate() < fechaInicio.getDate()) {
      this.formPago.get('n_meses')?.setValue(diferenciaMeses);
      return `Han pasado ${diferenciaMeses - 1} meses completos.`;
     
    }
 
    
    return `Han pasado ${diferenciaMeses} meses completos.`;
  }

  public cambioFechaPago( eventoFecha : Date){
    console.log(eventoFecha);
  }
    
 private calcular() {
    // const fechaInicio = new Date('2024-01-30'); 
    const fechaInicio = this.formPago.value!.fecha_pago_hasta; 
    console.log( 'veamos',fechaInicio ); 
    // Ejemplo de fecha de inicio
    const fechaActual = new Date();    // Ejemplo de fecha de fin
    const meses = this.calcularMesesCompletos(fechaInicio!, fechaActual);
    console.log(`Número de meses entre las fechas: ${meses}`);
  }


  
}
