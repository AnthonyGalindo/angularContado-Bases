import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContGenerarComponent } from './pages/cont-generar/cont-generar.component';
import { ContCambiarComponent } from './pages/cont-cambiar/cont-cambiar.component';
import { ContVisualizarComponent } from './pages/cont-visualizar/cont-visualizar.component';
import { ContratoRoutingModule } from './contrato-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ContGenerarComponent,
    ContCambiarComponent,
    ContVisualizarComponent
  ],
  imports: [
    CommonModule,
    ContratoRoutingModule,
    RouterModule,
    MaterialModule
  ]
})
export class ContratoModule { }
