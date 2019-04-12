import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { AlumnoComponent } from './components/alumnos/alumno/alumno.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AmigosComponent } from './components/amigos/amigos.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { MujeresComponent } from './components/mujeres/mujeres.component';
import { TendenciasComponent } from './components/tendencias/tendencias.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

import{AngularFireModule} from'angularfire2';
import{AngularFireDatabaseModule} from'angularfire2/database';
import{environment}from '../environments/environment';

import { ProductosComponent } from './components/productos/productos.component';
import { ProductosListComponent } from './components/productos/productos-list/productos-list.component';
import { ProductoComponent } from './components/productos/producto/producto.component';

import{ProductoService} from './services/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnosListComponent,
    AlumnoComponent,
    InicioComponent,
    ContactoComponent,
    AmigosComponent,
    RegistrarComponent,
    MujeresComponent,
    TendenciasComponent,
    RegistrarseComponent,
    ProductosComponent,
    ProductosListComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
