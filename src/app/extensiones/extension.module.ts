import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtensionRoutingModule } from './extension-routing.module';
import { MaterialModule } from '../material/material.module';
import { ExtGenerarComponent } from './pages/ext-generar/ext-generar.component';
import { ExtEditarComponent } from './pages/ext-editar/ext-editar.component';
import { ExtVisualizarComponent } from './pages/ext-visualizar/ext-visualizar.component';
import { ExtCompFormularioComponent } from './components/ext-comp-formulario/ext-comp-formulario.component';
import { ExtCompListadoComponent } from './components/ext-comp-listado/ext-comp-listado.component';
import { ExtCompFormularioEditarComponent } from './components/ext-comp-formulario-editar/ext-comp-formulario-editar.component';



@NgModule({
  declarations: [
    ExtGenerarComponent,
    ExtEditarComponent,
    ExtVisualizarComponent,
    ExtCompFormularioComponent,
    ExtCompListadoComponent,
    ExtCompFormularioEditarComponent
  ],
  imports: [
    CommonModule,
    ExtensionRoutingModule,
    MaterialModule
  ]
})
export class ExtensionModule { }
