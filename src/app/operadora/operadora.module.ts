import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OpeAdminComponent } from './pages/ope-admin/ope-admin.component';
import { OpeEdicionComponent } from './pages/ope-edicion/ope-edicion.component';
import { OperadoraRoutingModule } from './operadora-routing.module';
import { OpeRepresentanteComponent } from './pages/ope-representante/ope-representante.component';
import { MaterialModule } from '../material/material.module';
import { OperRegistroFormularioComponent } from './components/formulario-registro/ope-registro-formulario.component';
import { ListadoOperadoraComponent } from './components/listado-operadora/listado-operadora.component';
import { OpeRegistroComponent } from './pages/ope-registro/ope-registro.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OpeAdminComponent,
    OpeEdicionComponent,
    OpeRegistroComponent,
    OpeRepresentanteComponent,
    OperRegistroFormularioComponent,
    ListadoOperadoraComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    OperadoraRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class OperadoraModule { }
