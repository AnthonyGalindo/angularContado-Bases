import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
     BrowserAnimationsModule,
  ],
  exports:[ 
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
