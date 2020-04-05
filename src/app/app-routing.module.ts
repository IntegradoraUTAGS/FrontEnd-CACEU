import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioAnualComponent } from './anualCalendar/src/app/calendario-anual/calendario-anual.component';
import { DemoAppComponent } from './projects/demos/demo-app/demo-app.component';
const routes: Routes = [
  {
    path: 'calendarioAnual', component: CalendarioAnualComponent
  },
  {
    path: 'demo', component: DemoAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
