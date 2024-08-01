import { Component, OnChanges } from '@angular/core';
import { Canton, Parroquia, Provincia, TablaContrato, Tipo_Contrato } from '../../interface/contrato-interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-cont-generar',
  templateUrl: './cont-generar.component.html',
  styleUrls: ['./cont-generar.component.css'],
  providers: [DatePipe]
})
export class ContGenerarComponent {

  public cantidad = 0;
 
  public total = 0;

  public selectedProvincia!: number ;
  public cantones: Canton[] = [];
  public parroquias: Parroquia[] = []; 

  public tipoContrato:Tipo_Contrato[] = [
    {
      nombre: 'Postes',
      descripcion: 'Realizacion de contrato por poste',
      valorUnitario: 0.45
    },

    {
      nombre: 'Ductos',
      descripcion: 'Realizacion de contrato por ducto',
      valorUnitario: 0.66
    },

  ]
  selected_tipo_Contrato :string = this.tipoContrato[0].nombre
  
  public formContrato: FormGroup = this.fb.group(
    {
      valCantidad: [0],
      valorTotal:[0],
      selected_tipo_Contrato:[0.45],
      fechaVigente:[ new Date ],
      diasContrato:[0]
    }
  );

  displayedColumnss: string[] = [
    'tipoContrato',
    'vigencia',
    'ubicacion',
    'cantidad',
    'valor',
  ];

  constructor( private fb:FormBuilder, private datePipe: DatePipe ) {    
  }

  public fecha_inicio_tabla:string| null = this.datePipe.transform( this.formContrato.get('fechaVigente')?.value, ' dd MMM yyyy') ;
  
  retornarFecha( fecha: Date ) {
    console.log(fecha);
    this.dataTabla[0].vigencia = this.datePipe.transform( this.formContrato.get('fechaVigente')?.value, ' dd MMM yyyy') ; 
  }

  // TODO: CALCULAR LA FECHA FINAL EN BASE A LOS DIAS
  calcularFecha( dias: number ){
    // console.log(dias);
    // console.log(this.formContrato.get('fechaVigente')?.value);
    let fechaVigente = this.formContrato.get('fechaVigente')?.value;
    const fechaFin = new Date(fechaVigente.getTime() + (dias * 24 * 60 * 60 * 1000) );
        fechaVigente = this.datePipe.transform(fechaVigente, 'dd MMM yyyy');
    const fechaFinFormateada = this.datePipe.transform(fechaFin, 'dd MMM yyyy');
    console.log(fechaFin);
    console.log(fechaFinFormateada);

    if(dias > 0){
      this.dataTabla[0].vigencia = `${fechaVigente} - ${fechaFinFormateada}` ;
    }

  }

  public dataTabla : TablaContrato[] = [
    { 
      ubicacion: 'ambato-centro, ambato-sur',
      vigencia:  this.fecha_inicio_tabla  , 
      cantidad: this.cantidad, 
      valor: this.total, 
      tipoContrato: 'POSTES',
    }, 
  ]

  dataSource = new MatTableDataSource(this.dataTabla);

  public provincias: Provincia[] = [
    { value: 23, viewValue: 'Tungurahua' },
    { value: 24, viewValue: 'Zamora Chinchipe ' },
  ];

  private listaCantones: Canton[] = [
    {
      idProvincia: 23,
      viewValue: 'Ambato',
      value: 231
    },
    {
      idProvincia: 23,
      viewValue: 'Baños',
      value: 232
    },
    {
      idProvincia: 23,
      viewValue: 'Cevallos',
      value: 233
    },
    {
      idProvincia: 23,
      viewValue: 'Mocha',
      value: 234
    },
    {
      idProvincia: 23,
      viewValue: 'Patate',
      value: 235
    },
    {
      idProvincia: 23,
      viewValue: 'Pelileo',
      value: 236
    },
    {
      idProvincia: 23,
      viewValue: 'Quero',
      value: 237
    },
    {
      idProvincia: 23,
      viewValue: 'Tisaleo',
      value: 238
    },


    {
      idProvincia: 24,
      viewValue: 'Zamora',
      value: 238
    },
    {
      idProvincia: 24,
      viewValue: 'Chinchipe',
      value: 238
    },
    {
      idProvincia: 24,
      viewValue: 'Nangaritza',
      value: 238
    },
    {
      idProvincia: 24,
      viewValue: 'Yacuambi',
      value: 238
    },
    {
      idProvincia: 24,
      viewValue: 'Yantzaza',
      value: 238
    },
    {
      idProvincia: 24,
      viewValue: 'El Pangui',
      value: 238
    },
    {
      idProvincia: 24,
      viewValue: 'Centinela',
      value: 238
    },
    {
      idProvincia: 24,
      viewValue: 'Palanda',
      value: 238
    },
    {
      idProvincia: 24,
      viewValue: 'Paquisha',
      value: 238
    },
  ]
  
  private listaParroquias: Parroquia[] = [
    {
      idParroquia: 231,
      viewValue: 'Izamba',
      value: 255
    },
    {
      idParroquia: 231,
      viewValue: 'Juan',
      value: 411
    },
    {
      idParroquia: 231,
      viewValue: 'Montalvo',
      value: 693
    },
    {
      idParroquia: 231,
      viewValue: 'Pasa',
      value: 789
    },
    {
      idParroquia: 231,
      viewValue: 'Picaihua',
      value: 12
    },
    {
      idParroquia: 232,
      viewValue: 'Lligua',
      value: 45
    },
    {
      idParroquia: 232,
      viewValue: 'Río Negro',
      value: 70
    },
    {
      idParroquia: 232,
      viewValue: 'Río Verde',
      value: 20
    },
    {
      idParroquia: 232,
      viewValue: 'Ulba',
      value: 56
    },
    
  ]

  
  public cargaCantones(provinciaId: number): void {
    this.parroquias = [];
    this.cantones = this.listaCantones.filter( canton => canton.idProvincia === provinciaId );
    console.log(this.cantones);
  }

  public cargarParroquias( parroquiaId: number ) {
    console.log(parroquiaId);
    
    this.parroquias = this.listaParroquias.filter( parroquia => parroquia.idParroquia === parroquiaId );
    console.log(this.listaParroquias);
  }

  public sendFormularioContrato() { 
    console.log('enviar');
    console.log(this.formContrato);
  }

  public recalcular( valorTipoContrato:number ) {

  
    this.cantidad = this.formContrato.get('valCantidad')!.value;
    this.total = (this.cantidad * valorTipoContrato); 
    
    this.formContrato.get('valorTotal')!.setValue(this.total);

    const cantidadMostrar = this.total.toFixed(2);

    this.dataTabla[0].cantidad = this.cantidad;
    this.dataTabla[0].valor = parseFloat(cantidadMostrar);

    (this.dataTabla[0].tipoContrato == 'POSTES')? this.dataTabla[0].tipoContrato = 'DUCTOS': this.dataTabla[0].tipoContrato = 'POSTES'

  }
  
  //tabla de resultados

}