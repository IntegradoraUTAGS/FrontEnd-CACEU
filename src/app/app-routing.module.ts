import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioAnualComponent } from './anualCalendar/src/app/calendario-anual/calendario-anual.component';
import { DemoAppComponent } from './projects/demos/demo-app/demo-app.component';
import { LoginComponent } from './login/login.component';
import { RegistrarusuarioComponent } from './registrarusuario/registrarusuario.component';
import { collapseAnimation } from './projects/angular-calendar/src/modules/month/calendar-open-day-events.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormEventComponent } from '../app/form-event/form-event.component';
const routes: Routes = [
  {
    path: 'calendarioAnual',
    component: CalendarioAnualComponent
  },
  {
    path: 'demo',
    component: DemoAppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrar',
    component: RegistrarusuarioComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'formEvent',
    component: FormEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
