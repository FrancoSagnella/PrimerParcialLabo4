import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ErrorComponent } from './error/error.component';
import { LoginGuardGuard } from './login-guard.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'bienvenida', component:BienvenidaComponent},
{path:'login', component:LoginComponent},
{path:'repartidor/alta',component:AltaRepartidorComponent, canActivate:[LoginGuardGuard]},
{path:'error', component:ErrorComponent},
{path:'**', redirectTo:'bienvenida', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
