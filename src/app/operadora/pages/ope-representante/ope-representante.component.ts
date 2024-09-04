import { Component } from '@angular/core';

interface Representate {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'ope-representante',
  templateUrl: './ope-representante.component.html',
  styleUrls: ['./ope-representante.component.css']
})
export class OpeRepresentanteComponent {
  representates: Representate[] = [
    {value: 'id-1', viewValue: 'Carlos Mendez'},
    {value: 'id-1', viewValue: 'Pedro Moscoso'},
    {value: 'id-2', viewValue: 'Mary Sanchez'},
  ];
}
