import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { MaterialModule } from './material/material.module';
import { AuthLayoutComponent } from './inicio/auth-layout/auth-layout.component';
import { AuthPageComponent } from './shared/pages/auth-page/auth-page.component';


const routes: Routes = [



  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule )
  },

  {
    path:'auth',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },



  {
    path: '**',
    redirectTo: '/auth/inicio/login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
