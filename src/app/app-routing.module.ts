import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IrdigitalLayoutComponent } from './irdigital-layout/irdigital-layout.component';
import { HomeComponent } from './pages/cliente/home/home.component';
import { IndicadoresComponent } from './pages/cliente/indicadores/indicadores.component';
import { ListarClientesComponent } from './pages/cliente/listar-clientes/listar-clientes.component';
import { NuevoClienteComponent } from './pages/cliente/nuevo-cliente/nuevo-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: IrdigitalLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'cliente/new', component: NuevoClienteComponent },
      { path: 'cliente/list', component: ListarClientesComponent },
      { path: 'cliente/kpi', component: IndicadoresComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
