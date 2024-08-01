import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContGenerarComponent } from './pages/cont-generar/cont-generar.component';
import { ContCambiarComponent } from './pages/cont-cambiar/cont-cambiar.component';
import { ContVisualizarComponent } from './pages/cont-visualizar/cont-visualizar.component';
import { ContratoRoutingModule } from './contrato-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContCompTablaMensualComponent } from './components/cont-comp-tabla-mensual/cont-comp-tabla-mensual.component';



@NgModule({
  declarations: [
    ContGenerarComponent,
    ContCambiarComponent,
    ContVisualizarComponent,
    ContCompTablaMensualComponent,

  ],
  imports: [
    CommonModule,
    ContratoRoutingModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ContratoModule { }
