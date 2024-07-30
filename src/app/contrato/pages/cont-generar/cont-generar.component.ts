import { Component } from '@angular/core';
import { Canton, Provincia } from '../../interface/contrato-interfaces';

@Component({
  selector: 'app-cont-generar',
  templateUrl: './cont-generar.component.html',
  styleUrls: ['./cont-generar.component.css']
})
export class ContGenerarComponent {

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

  public cantones: Canton[] = [
    {
      idProvincia: 23,
      viewValue: '',
      value: 231
    },
    {
      idProvincia: 23,
      viewValue: '',
      value: 231
    },
    {
      idProvincia: 23,
      viewValue: '',
      value: 231
    },
    {
      idProvincia: 23,
      viewValue: '',
      value: 231
    },
    {
      idProvincia: 23,
      viewValue: '',
      value: 231
    },
    {
      idProvincia: 23,
      viewValue: '',
      value: 231
    }
  ]
  
  


}