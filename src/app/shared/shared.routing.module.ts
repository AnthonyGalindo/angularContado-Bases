import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OperadoraModule } from '../operadora/operadora.module';
import { ContratoModule } from '../contrato/contrato.module';
import { ExtensionModule } from '../extensiones/extension.module';
import { DocumentoModule } from '../documento/documento.module';
import { PagoModule } from '../pago/pago.module';
import { HomePageComponent } from "./pages/home-page/home-page.component";





const routes: Routes = [
{
    path:'',
    component:HomePageComponent,
    children: [
    {
      path: 'operadora',
      loadChildren: () => import('../operadora/operadora.module').then(m => m.OperadoraModule )
    },
    {
      path: 'contrato',
      loadChildren: () => import('../contrato/contrato.module').then(m => m.ContratoModule )
    },

    {
      path: 'extension',
      loadChildren: () => import('../extensiones/extension.module').then(m => m.ExtensionModule )
    },

    {
      path: 'documento',
      loadChildren: () => import('../documento/documento.module').then(m => m.DocumentoModule)
    },

    {
      path: 'pago',
      loadChildren: () => import('../pago/pago.module').then(m => m.PagoModule )
    },

    ],
}
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class SharedRoutingModule {}
