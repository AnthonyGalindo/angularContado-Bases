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
    path: 'extension',
    loadChildren: () => import('./extensiones/extension.module').then(m => m.ExtensionModule )
  },

  {
    path: 'documento',
    loadChildren: () => import('./documento/documento.module').then(m => m.DocumentoModule)
  },

  {
    path: 'pago',
    loadChildren: () => import('./pago/pago.module').then(m => m.PagoModule  )
  },

  {
    path: 'auth',
    loadComponent: () => import ('./inicio/inicio.module').then(m => m.InicioModule),
    
  },

  {
    path: '**',
    redirectTo: '/auth/login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
