import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AltaRepartidorComponent } from './repartidor/alta-repartidor/alta-repartidor.component';
import { ErrorComponent } from './error/error.component';
import { TablaPaisesComponent } from './paises/tabla-paises/tabla-paises.component';
import { ListaRepartidoresComponent } from './repartidor/lista-repartidores/lista-repartidores.component';
import { NavComponent } from './nav/nav.component';
import { TablaRepartidoresComponent } from './repartidor/lista-repartidores/tabla-repartidores/tabla-repartidores.component';
import { DetalleRepartidoresComponent } from './repartidor/lista-repartidores/detalle-repartidores/detalle-repartidores.component';
import { DetallePaisComponent } from './paises/detalle-pais/detalle-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    AltaRepartidorComponent,
    ErrorComponent,
    TablaPaisesComponent,
    ListaRepartidoresComponent,
    NavComponent,
    TablaRepartidoresComponent,
    DetalleRepartidoresComponent,
    DetallePaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
