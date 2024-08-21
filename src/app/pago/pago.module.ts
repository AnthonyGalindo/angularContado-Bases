import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagoRoutingModule } from './pago-routing.module';
import { PagoGenerarComponent } from './pages/pago-generar/pago-generar.component';
import { PagoVerComponent } from './pages/pago-ver/pago-ver.component';
import { PagoEditarComponent } from './pages/pago-editar/pago-editar.component';
import { PagoCompGenerarComponent } from './components/pago-comp-generar/pago-comp-generar.component';
import { PagoCompListadoComponent } from './components/pago-comp-listado/pago-comp-listado.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    PagoGenerarComponent,
    PagoVerComponent,
    PagoEditarComponent,
    PagoCompGenerarComponent,
    PagoCompListadoComponent
  ],
  imports: [
    CommonModule,
    PagoRoutingModule,
    MaterialModule
  ]
})
export class PagoModule { }
