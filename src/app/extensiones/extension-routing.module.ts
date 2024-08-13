import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtGenerarComponent } from './pages/ext-generar/ext-generar.component';
import { ExtEditarComponent } from './pages/ext-editar/ext-editar.component';
import { ExtVisualizarComponent } from './pages/ext-visualizar/ext-visualizar.component';

 const routes: Routes = [
    {
        path: 'generar',
        component: ExtGenerarComponent
    },

    {
        path: 'editar',
        component: ExtEditarComponent
    },

    {
        path: 'ver',
        component: ExtVisualizarComponent
    }
 ]

 @NgModule({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ],
 })
 export class ExtensionRoutingModule{}