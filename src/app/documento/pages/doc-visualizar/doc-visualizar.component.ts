import { Component } from '@angular/core';

@Component({
  selector: 'doc-visualizar',
  templateUrl: './doc-visualizar.component.html',
  styleUrls: ['./doc-visualizar.component.css']
})
export class DocVisualizarComponent {
  ventana: boolean = true;
  varRuta: string = 'CONTRATO';

  changeVentana(response: boolean) {
    this.ventana = response;
    (!this.ventana) ? this.varRuta = 'EXTENSION' : this.varRuta = 'CONTRATO';
  }


  
}
