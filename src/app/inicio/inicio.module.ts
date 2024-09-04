import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { MaterialModule } from '../material/material.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { InicioRoutingModule } from './inicio-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    InicioRoutingModule,
  ],
  exports:[
    AuthLayoutComponent
  ]
})
export class InicioModule { }
