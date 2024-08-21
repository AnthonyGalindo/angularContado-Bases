import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagoEditarComponent } from './pages/pago-editar/pago-editar.component';
import { PagoVerComponent } from './pages/pago-ver/pago-ver.component';
import { PagoGenerarComponent } from './pages/pago-generar/pago-generar.component';

const routes: Routes = [
  {
    path: 'generar',
    component: PagoGenerarComponent
  },
  {
    path: 'ver',
    component: PagoVerComponent
  },
  {
    path: 'cambiar',
    component: PagoEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoRoutingModule { }
