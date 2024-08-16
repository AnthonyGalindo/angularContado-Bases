import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoRoutingModule } from './documento-routing.module';
import { DocGenerarComponent } from './pages/doc-generar/doc-generar.component';
import { DocCambiarComponent } from './pages/doc-cambiar/doc-cambiar.component';
import { DocVisualizarComponent } from './pages/doc-visualizar/doc-visualizar.component';
import { DocCompSubirContratoComponent } from './components/doc-comp-subir-contrato/doc-comp-subir-contrato.component';
import { DocCompSubirExtensionComponent } from './components/doc-comp-subir-extension/doc-comp-subir-extension.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DocGenerarComponent,
    DocCambiarComponent,
    DocVisualizarComponent,
    DocCompSubirContratoComponent,
    DocCompSubirExtensionComponent
  ],
  imports: [
    CommonModule,
    DocumentoRoutingModule,
    MaterialModule
  ]
})
export class DocumentoModule { }
