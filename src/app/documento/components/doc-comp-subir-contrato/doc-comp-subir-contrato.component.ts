import { Component } from '@angular/core';

@Component({
  selector: 'doc-comp-subir-contrato',
  templateUrl: './doc-comp-subir-contrato.component.html',
  styleUrls: ['./doc-comp-subir-contrato.component.css']
})
export class DocCompSubirContratoComponent {

  public  tipoContratos = [
    {
      tipo_id: '1224qwe',
      tipo_nombre: 'Contrato de Alquiler'
    },
    {
      tipo_id: '777887qr',
      tipo_nombre: 'Contrato de Extension'
    },

  ]

}
