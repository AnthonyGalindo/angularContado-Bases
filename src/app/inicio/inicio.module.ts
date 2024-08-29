import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { MaterialModule } from '../material/material.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';



@NgModule({
  declarations: [
    LoginComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule
  ]
})
export class InicioModule { }
