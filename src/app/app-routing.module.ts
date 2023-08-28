import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CargaDeDatosComponent } from './carga-de-datos/carga-de-datos.component';

const routes: Routes = [
  {path:"", component:MainComponent, title:"home"},
  {path:"main", component: MainComponent, title:"home"},
  {path:"login", component: LoginComponent, title:"login"},
  {path:"cargaDedatos",component: CargaDeDatosComponent, title:"cargaDeDatos"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
