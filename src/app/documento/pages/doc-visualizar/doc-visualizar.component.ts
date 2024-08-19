import { Component } from '@angular/core';

@Component({
  selector: 'doc-visualizar',
  templateUrl: './doc-visualizar.component.html',
  styleUrls: ['./doc-visualizar.component.css']
})
export class DocVisualizarComponent {
  ventana: boolean = true;

  changeVentana(response: boolean) {
    this.ventana = response;
  }
  
}
