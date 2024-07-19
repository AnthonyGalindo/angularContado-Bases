import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeRegistroComponent } from './pages/ope-registro/ope-registro.component';
import { OpeEdicionComponent } from './pages/ope-edicion/ope-edicion.component';



@NgModule({
  declarations: [
    OpeRegistroComponent,
    OpeEdicionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OperadoraModule { }
