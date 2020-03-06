import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioAnualComponent } from './calendario-anual/calendario-anual.component'
const routes: Routes = [
  {
    path: 'calendarioAnual', component: CalendarioAnualComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
