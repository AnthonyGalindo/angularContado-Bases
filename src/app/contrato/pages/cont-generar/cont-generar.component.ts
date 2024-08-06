import { Component, inject, Inject, Input, OnChanges, signal  } from '@angular/core';
import { Canton, Parroquia, Provincia, PruebaLista, TablaContrato, Tipo_Contrato,} from '../../interface/contrato-interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ServiceContrato } from '../../services/contrato.service';
import { Router } from '@angular/router';
import {  MatDialog } from '@angular/material/dialog';
import { ContCompTablaMensualComponent } from '../../components/cont-comp-tabla-mensual/cont-comp-tabla-mensual.component';

@Component({
  selector: 'app-cont-generar',
  templateUrl: './cont-generar.component.html',
  styleUrls: ['./cont-generar.component.css'],
  providers: [DatePipe],
})
export class ContGenerarComponent {

  // animal!: string;
  // name!: string;

  constructor(private fb: FormBuilder, private datePipe: DatePipe ,  private sc: ServiceContrato, private rout:Router , public dialog: MatDialog) {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContCompTablaMensualComponent, {
      data: {name: this.total, animal: this.subtotal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


  public cantidad = 0;
  public total = 0;
  public subtotal = 0;

   tablaCalculadaMess: PruebaLista [] = [{
     valor: 0,
     valorTotal: 0
   }] ;
 


  public selectedProvincia!: number;
  public cantones: Canton[] = [];
  public parroquias: Parroquia[] = [];
  public meses: string[] = ['Enero', 'Febrero', 'Marzo' , 'Abril' , 'Mayo' ,'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nobiembre', 'Diciembre'] ;



  public tipoContrato: Tipo_Contrato[] = [
    {
      nombre: 'Postes',
      descripcion: 'Realizacion de contrato por poste',
      valorUnitario: 0.45,
    },

    {
      nombre: 'Ductos',
      descripcion: 'Realizacion de contrato por ducto',
      valorUnitario: 0.66,
    },
  ];
  selected_tipo_Contrato: string = this.tipoContrato[0].nombre;

  public formContrato: FormGroup = this.fb.group({
    valCantidad: [0],
    valorTotal: [0],
    selected_tipo_Contrato: [0.45],
    fechaVigente: [new Date()],
    mesesContrato: [0],
    formSubtotal: [0],
  });

  displayedColumnss: string[] = [
    'tipoContrato',
    'vigencia',
    'ubicacion',
    'cantidad',
    'subTotalMes',
    'totalMes',
    'subTotal',
    'valor',
  ];

  public fecha_inicio_tabla: string | null = this.datePipe.transform(
    this.formContrato.get('fechaVigente')?.value,
    'dd/MM/yyy'
  );

  retornarFecha(fecha: Date) {
    console.log(fecha);
    this.dataTabla[0].vigencia = this.datePipe.transform(
      this.formContrato.get('fechaVigente')?.value,
      'dd/MM/yyy'
    );
  }
  // TODO: CALCULAR LA FECHA FINAL EN BASE A LOS DIAS
  calcularFecha(meses: number) {
    let fechaVigente = this.formContrato.get('fechaVigente')?.value;
    const fechaFin = new Date(fechaVigente);
    fechaFin.setMonth(fechaFin.getMonth() + meses);

    fechaVigente = this.datePipe.transform(fechaVigente, 'dd/MM/yyy');
    const fechaFinFormateada = this.datePipe.transform(fechaFin, 'dd/MM/yyy');
    console.log(fechaFin);
    console.log(fechaFinFormateada);

    if (meses > 0) {
      this.dataTabla[0].vigencia = `${fechaVigente} - ${fechaFinFormateada}`;
    }
  }

  public dataTabla: TablaContrato[] = [
    {
      ubicacion: 'ambato-centro, ambato-sur',
      vigencia: this.fecha_inicio_tabla,
      cantidad: this.cantidad,
      subTotal: this.subtotal,
      valor: this.total,
      tipoContrato: 'POSTES',
    },
  ];

  dataSource = new MatTableDataSource(this.dataTabla);

  public provincias: Provincia[] = [
    { value: 23, viewValue: 'Tungurahua' },
    { value: 24, viewValue: 'Zamora Chinchipe ' },
  ];

  private listaCantones: Canton[] = [
    {
      idProvincia: 23,
      viewValue: 'Ambato',
      value: 231,
    },
    {
      idProvincia: 23,
      viewValue: 'Baños',
      value: 232,
    },
    {
      idProvincia: 23,
      viewValue: 'Cevallos',
      value: 233,
    },
    {
      idProvincia: 23,
      viewValue: 'Mocha',
      value: 234,
    },
    {
      idProvincia: 23,
      viewValue: 'Patate',
      value: 235,
    },
    {
      idProvincia: 23,
      viewValue: 'Pelileo',
      value: 236,
    },
    {
      idProvincia: 23,
      viewValue: 'Quero',
      value: 237,
    },
    {
      idProvincia: 23,
      viewValue: 'Tisaleo',
      value: 238,
    },

    {
      idProvincia: 24,
      viewValue: 'Zamora',
      value: 238,
    },
    {
      idProvincia: 24,
      viewValue: 'Chinchipe',
      value: 238,
    },
    {
      idProvincia: 24,
      viewValue: 'Nangaritza',
      value: 238,
    },
    {
      idProvincia: 24,
      viewValue: 'Yacuambi',
      value: 238,
    },
    {
      idProvincia: 24,
      viewValue: 'Yantzaza',
      value: 238,
    },
    {
      idProvincia: 24,
      viewValue: 'El Pangui',
      value: 238,
    },
    {
      idProvincia: 24,
      viewValue: 'Centinela',
      value: 238,
    },
    {
      idProvincia: 24,
      viewValue: 'Palanda',
      value: 238,
    },
    {
      idProvincia: 24,
      viewValue: 'Paquisha',
      value: 238,
    },
  ];

  private listaParroquias: Parroquia[] = [
    {
      idParroquia: 231,
      viewValue: 'Izamba',
      value: 255,
    },
    {
      idParroquia: 231,
      viewValue: 'Juan',
      value: 411,
    },
    {
      idParroquia: 231,
      viewValue: 'Montalvo',
      value: 693,
    },
    {
      idParroquia: 231,
      viewValue: 'Pasa',
      value: 789,
    },
    {
      idParroquia: 231,
      viewValue: 'Picaihua',
      value: 12,
    },
    {
      idParroquia: 232,
      viewValue: 'Lligua',
      value: 45,
    },
    {
      idParroquia: 232,
      viewValue: 'Río Negro',
      value: 70,
    },
    {
      idParroquia: 232,
      viewValue: 'Río Verde',
      value: 20,
    },
    {
      idParroquia: 232,
      viewValue: 'Ulba',
      value: 56,
    },
  ];

  public cargaCantones(provinciaId: number): void {
    this.parroquias = [];
    this.cantones = this.listaCantones.filter(
      (canton) => canton.idProvincia === provinciaId
    );
    console.log(this.cantones);
  }

  public cargarParroquias(parroquiaId: number) {
    console.log(parroquiaId);

    this.parroquias = this.listaParroquias.filter(
      (parroquia) => parroquia.idParroquia === parroquiaId
    );
    console.log(this.listaParroquias);
  }

  public sendFormularioContrato() {
    console.log('enviar');
    console.log(this.formContrato);



  }

  public generarTabla() {

      let valores: PruebaLista = {
      valor: this.total,
      valorTotal: this.subtotal
    }

     this.tablaCalculadaMess.push( valores );
    this.sc.setTabla_contrato = this.tablaCalculadaMess;
    this.rout.navigate(['/contrato/cambiar']);
  }

  public recalcular(valorTipoContrato: number, control: string) {
    this.cantidad = this.formContrato.get('valCantidad')!.value;
    this.total =
      this.cantidad * valorTipoContrato +
      this.cantidad * valorTipoContrato * 0.12;

    this.subtotal = ( this.cantidad * valorTipoContrato);
    // this.formContrato.get('formSubtotal')!.setValue(this.subtotal.toFixed(2));
    this.formContrato.get('valorTotal')!.setValue(this.total.toFixed(2));
    const cantidadMostrar = this.total.toFixed(2);
    this.dataTabla[0].cantidad = this.cantidad;
    this.dataTabla[0].valor = parseFloat(cantidadMostrar);
    this.dataTabla[0].subTotal = this.subtotal;

    if(control === 'select'){
      this.dataTabla[0].tipoContrato == 'POSTES'
      ? (this.dataTabla[0].tipoContrato = 'DUCTOS')
      : (this.dataTabla[0].tipoContrato = 'POSTES');
    }
  }
  

  //tabla de resultados
}
