import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioAnualComponent } from './anualCalendar/src/app/calendario-anual/calendario-anual.component';
import { DemoAppComponent } from './projects/demos/demo-app/demo-app.component';
import { LoginComponent } from './login/login.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
