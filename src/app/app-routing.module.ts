import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import{MujeresComponent} from'./components/mujeres/mujeres.component';
import {TendenciasComponent } from './components/tendencias/tendencias.component';
import{RegistrarseComponent} from'./components/registrarse/registrarse.component';
import{ProductosComponent} from'./components/productos/productos.component';


const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'mujeres', component: MujeresComponent},
  {path:'registrarse',component:RegistrarseComponent},
  {path:'tendencias', component:TendenciasComponent},
  {path:'productos', component:ProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
