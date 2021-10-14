import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './repartidor/alta-repartidor/alta-repartidor.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ErrorComponent } from './error/error.component';
import { ListaRepartidoresComponent } from './repartidor/lista-repartidores/lista-repartidores.component';
import { LoginGuardGuard } from './services/login-guard.guard';
import { LoginComponent } from './login/login.component';
import { ListaPedidosComponent } from './pedidos/lista-pedidos/lista-pedidos.component';
import { PedidoGuardGuard } from './services/pedido-guard.guard';
import { ErrorAdminComponent } from './error-admin/error-admin.component';

const routes: Routes = [{path:'bienvenida', component:BienvenidaComponent},
{path:'login', component:LoginComponent},
{path:'repartidor/alta',component:AltaRepartidorComponent, canActivate:[LoginGuardGuard]},
{path:'repartidor/lista', component:ListaRepartidoresComponent, canActivate:[LoginGuardGuard]},
{path:'error', component:ErrorComponent},
{path:'errorAdmin', component:ErrorAdminComponent},
{path:'pedidos/lista', component:ListaPedidosComponent, canActivate:[PedidoGuardGuard]},
{path:'**', redirectTo:'bienvenida', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
