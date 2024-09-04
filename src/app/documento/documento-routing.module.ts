import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DocGenerarComponent } from "./pages/doc-generar/doc-generar.component";
import { DocCambiarComponent } from "./pages/doc-cambiar/doc-cambiar.component";
import { DocVisualizarComponent } from "./pages/doc-visualizar/doc-visualizar.component";
import { DocCambiarExtComponent } from "./pages/doc-cambiar-ext/doc-cambiar-ext.component";

const routes: Routes = [
    {
        path: 'generar',
        component: DocGenerarComponent
    },
    {
        path: 'cambiar',
        component: DocCambiarComponent
    },
    {
        path: 'cambiar-ext',
        component: DocCambiarExtComponent
    },
    {
        path: 'ver',
        component: DocVisualizarComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class DocumentoRoutingModule {}