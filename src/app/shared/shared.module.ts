import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    
    SidebarComponent,
    HeaderComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,

  ]
})
export class SharedModule { }
