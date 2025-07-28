import { Routes } from '@angular/router';
import { ContactoComponent } from '../Contacto/Contacto.component';
import { AcercaDeComponent } from '../acercaDe/acercaDe.component';


export const routes: Routes = [
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'acercade',
    component: AcercaDeComponent
  }
];
