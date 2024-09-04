import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';




export const routes: Routes = [
    {
      path: 'inicio',
      component:AuthLayoutComponent,
    children: [
      {
        path:'login',
        component: LoginComponent,
      }
    ]
    },
    // {
    //   path: '**',
    //   redirectTo: '/auth/inicio/login'
    // }
      ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class InicioRoutingModule { }