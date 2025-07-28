import { Routes } from '@angular/router';
import { InicioComponent } from './Inicio/Inicio.component';
import { MapaComponent } from './Mapa/Mapa.component';
import { ContactoComponent } from './Contacto/Contacto.component';
import { AcercaDeComponent } from './AcercaDe/AcercaDe.component';
import { Pagina404Component } from './Pagina404/Pagina404.component';


export const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'acercade',
    component:AcercaDeComponent
  },
  {
    path: 'pagina404',
    component: Pagina404Component
  },
  {
    path: '**',
    redirectTo: 'pagina404'
  }

];
