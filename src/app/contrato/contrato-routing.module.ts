import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContGenerarComponent } from './pages/cont-generar/cont-generar.component';
import { ContCambiarComponent } from './pages/cont-cambiar/cont-cambiar.component';
import { ContVisualizarComponent } from './pages/cont-visualizar/cont-visualizar.component';


const routes: Routes = [
    {
        path: 'generar',
        component: ContGenerarComponent
    },
    {
        path: 'cambiar',
        component: ContCambiarComponent
    },
    {
        path: 'ver',
        component: ContVisualizarComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContratoRoutingModule { }
