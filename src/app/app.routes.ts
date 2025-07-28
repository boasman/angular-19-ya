import { Routes } from '@angular/router';
import { InicioComponent } from './RutaNoExistente/Inicio/Inicio.component';
import { MapaComponent } from './RutaNoExistente/Mapa/Mapa.component';
import { ContactoComponent } from './Rutas/Contacto/Contacto.component';
import { AcercaDeComponent } from './Rutas/acercaDe/acercaDe.component';
import { Pagina404Component } from './RutaNoExistente/Pagina404/Pagina404.component';
import { AmericaComponent } from './America/America.component';
import { ChileComponent } from './America/chile/chile.component';
import { ArgentinaComponent } from './America/argentina/argentina.component';
import { UruguayComponent } from './America/uruguay/uruguay.component';
import { EuropaComponent } from './Europa/Europa.component';
import { EspanaComponent } from './Europa/espana/espana.component';
import { FranciaComponent } from './Europa/francia/francia.component';
import { ItaliaComponent } from './Europa/italia/italia.component';

export const routes: Routes = [
  // {
  //   path:'',
  //   component: InicioComponent
  // },
  // {
  //   path: 'inicio',
  //   component: InicioComponent
  // },
  // {
  //   path: 'mapa',
  //   component: MapaComponent
  // },
  // {
  //   path: 'contacto',
  //   component: ContactoComponent
  // },
  // {
  //   path: 'acercade',
  //   component:AcercaDeComponent
  // },
  // {
  //   path: 'pagina404',
  //   component: Pagina404Component
  // },
  // {
  //   path: '**',
  //   redirectTo: 'pagina404'
  // }
  {
    path: 'america',
    component: AmericaComponent,
    children: [
      {
        path: 'chile',
        component: ChileComponent
      },
      {
        path: 'argentina',
        component: ArgentinaComponent
      },
      {
        path: 'uruguay',
        component: UruguayComponent

      }
    ]
  },
  {
    path: 'europa',
    component: EuropaComponent,
    children: [
      {
        path: 'espana',
        component: EspanaComponent
      },
      {
        path: 'francia',
        component: FranciaComponent
      },
      {
        path: 'italia',
        component: ItaliaComponent

      }
    ]
  }

];
