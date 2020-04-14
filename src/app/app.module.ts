import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioAnualComponent } from './anualCalendar/src/app/calendario-anual/calendario-anual.component';
import { AngularCalendarYearViewModule } from './public-api';
import { CalendarioAnualModule } from './anualCalendar/src/app/calendario-anual/calendario-anual.module';
import { RouterModule } from '@angular/router';
import { DemoAppComponent } from './projects/demos/demo-app/demo-app.component';
import { DemoAppModule1 } from './projects/demos/demo-app/demo-app.module';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioAnualComponent,
    DemoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCalendarYearViewModule.forRoot(),
    CalendarioAnualModule,
    DemoAppModule1,
    RouterModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
