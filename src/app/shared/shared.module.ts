import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SharedRoutingModule } from './shared.routing.module';



@NgModule({
  declarations: [
    HomePageComponent,

    SidebarComponent,
    HeaderComponent,
    AuthPageComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedRoutingModule
  ],
  exports: [
    HomePageComponent,
    // AuthPageComponent


  ]
})
export class SharedModule { }
