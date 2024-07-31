import { Component, OnChanges } from '@angular/core';
import { Canton, Parroquia, Provincia, Tipo_Contrato } from '../../interface/contrato-interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cont-generar',
  templateUrl: './cont-generar.component.html',
  styleUrls: ['./cont-generar.component.css']
})
export class ContGenerarComponent {
    
  constructor( private fb:FormBuilder ) {    
  }

  public formContrato: FormGroup = this.fb.group(
    {
      valorTipo: [0],
      valorTotal:[0],
      selected_tipo_Contrato:[0.45]

    }
  )

  public cantidad = 0;
  public total = 0;

  public selectedProvincia!: number ;
  public cantones: Canton[] = [];
  public parroquias: Parroquia[] = []; 
 
  public provincias: Provincia[] = [
    // { value: 1, viewValue:  'Azuay' },
    // { value: 2, viewValue:  'Bolívar' },
    // { value: 3, viewValue:  'Cañar' },
    // { value: 4, viewValue:  'Carchi' },
    // { value: 5, viewValue:  'Chimborazo' },
    // { value: 6, viewValue:  'Cotopaxi' },
    // { value: 7, viewValue:  'El' },
    // { value: 8, viewValue:  'Esmeraldas' },
    // { value: 9, viewValue:  'Galápagos' },
    // { value: 10, viewValue: 'Guayas' },
    // { value: 11, viewValue: 'Imbabura' },
    // { value: 12, viewValue: 'Loja' },
    // { value: 13, viewValue: 'Los' },
    // { value: 14, viewValue: 'Manabí' },
    // { value: 15, viewValue: 'Morona' },
    // { value: 16, viewValue: 'Napo' },
    // { value: 17, viewValue: 'Orellana' },
    // { value: 18, viewValue: 'Pastaza' },
    // { value: 19, viewValue: 'Pichincha' },
    // { value: 20, viewValue: 'Santa' },
    // { value: 21, viewValue: 'Santo' },
    // { value: 22, viewValue: 'Sucumbíos' },
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

  public tipoContrato:Tipo_Contrato[] = [
    {
      nombre: 'Postes',
      descripcion: 'Realizacion de contrato por poste',
      valorUnitario: 0.45
    },

    {
      nombre: 'Ductos',
      descripcion: 'Realizacion de contrato por ducto',
      valorUnitario: 0.65
    },

  ]

  selected_tipo_Contrato :string = this.tipoContrato[0].nombre
  
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

  public recalcular(val:number) {
    console.log(val);
    
    this.cantidad = this.formContrato.get('valorTipo')!.value;
    this.total = (this.cantidad * val); 
    
    this.formContrato.get('valorTotal')!.setValue(this.total);
     
  }


}