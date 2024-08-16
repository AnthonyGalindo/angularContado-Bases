import { Component } from '@angular/core';

@Component({
  selector: 'doc-generar',
  templateUrl: './doc-generar.component.html',
  styleUrls: ['./doc-generar.component.css']
})
export class DocGenerarComponent {


  ventana: boolean = true;

  changeVentana(response: boolean) {
    this.ventana = response;
  }
}
