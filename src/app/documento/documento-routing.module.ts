import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DocGenerarComponent } from "./pages/doc-generar/doc-generar.component";
import { DocCambiarComponent } from "./pages/doc-cambiar/doc-cambiar.component";
import { DocVisualizarComponent } from "./pages/doc-visualizar/doc-visualizar.component";

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
        path: 'ver',
        component: DocVisualizarComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class DocumentoRoutingModule {}