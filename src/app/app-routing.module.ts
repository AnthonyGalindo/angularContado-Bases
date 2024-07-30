import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { MaterialModule } from './material/material.module';


const routes: Routes = [
   
  {
    path: 'operadora',     
    loadChildren: () => import('./operadora/operadora.module').then(m => m.OperadoraModule ) 
  },

  {
    path: 'contrato',     
    loadChildren: () => import('./contrato/contrato.module').then(m => m.ContratoModule ) 
  },

  {
    path: '**',
    redirectTo: 'operadora/admin'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
