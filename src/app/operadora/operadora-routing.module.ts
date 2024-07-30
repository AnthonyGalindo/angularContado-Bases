import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpeAdminComponent } from './pages/ope-admin/ope-admin.component';
import { OpeEdicionComponent } from './pages/ope-edicion/ope-edicion.component';
import { OpeRepresentanteComponent } from './pages/ope-representante/ope-representante.component';
import { OpeRegistroComponent } from './pages/ope-registro/ope-registro.component';

const routes: Routes = [
  {
    path: 'admin',
    component: OpeAdminComponent,
  },
  {
    path: 'editar',
    component: OpeEdicionComponent
  },
  {
    path: 'registro',
    component: OpeRegistroComponent
  },
  {
    path: 'representante',
    component: OpeRepresentanteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperadoraRoutingModule {}
