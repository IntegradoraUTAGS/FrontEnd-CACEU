import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioAnualComponent } from './calendario-anual/calendario-anual.component';
import { AngularCalendarYearViewModule } from './public-api';
import { CalendarioAnualModule } from './calendario-anual/calendario-anual.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioAnualComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCalendarYearViewModule.forRoot(),
    CalendarioAnualModule,
    RouterModule

  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
