import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ContGenerarComponent } from './pages/cont-generar/cont-generar.component';
import { ContCambiarComponent } from './pages/cont-cambiar/cont-cambiar.component';
import { ContVisualizarComponent } from './pages/cont-visualizar/cont-visualizar.component';
import { ContratoRoutingModule } from './contrato-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContCompTablaMensualComponent } from './components/cont-comp-tabla-mensual/cont-comp-tabla-mensual.component';
import { HttpClientModule } from '@angular/common/http';
import { ContratosService } from './services/contrato-listado.service';
import { ContCompListaContratoComponent } from './components/cont-comp-lista-contrato/cont-comp-lista-contrato.component';
import { ContCompGenerarComponent } from './components/cont-comp-generar-contrato/cont-comp-generar.component';



@NgModule({
  declarations: [
    ContGenerarComponent,
    ContCambiarComponent,
    ContVisualizarComponent,
    ContCompTablaMensualComponent,
    ContCompListaContratoComponent,
    ContCompGenerarComponent

  ],
  imports: [
    CommonModule,
    ContratoRoutingModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContratosService,
    DatePipe
  ]
})
export class ContratoModule { }
